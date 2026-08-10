(function () {
  'use strict';

  const lti = window.__SML3004_LTI__;
  if (!lti || !lti.launchId) return;

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
    } else {
      fn();
    }
  }

  ready(function () {
    const outputPanel = document.getElementById('outputPanel');
    const downloadLink = document.getElementById('downloadLink');
    const recordedVideo = document.getElementById('recordedVideo');
    const controls = outputPanel ? outputPanel.querySelector('.controls') : null;
    const introPanel = document.querySelector('.intro-panel');

    if (!outputPanel || !downloadLink || !recordedVideo || !controls) return;

    downloadLink.style.display = 'none';

    const previewText = outputPanel.querySelector('p');
    if (previewText) {
      previewText.textContent = 'Your recording is ready. Preview it below, then send the video directly to Canvas.';
    }

    if (introPanel) {
      const paragraphs = Array.from(introPanel.querySelectorAll('p'));
      const storageNotice = paragraphs.find(function (p) {
        return p.textContent.includes('The recorded video will not be stored on any external platform');
      });
      if (storageNotice) {
        storageNotice.innerHTML = '<strong>Canvas LTI prototype: after you stop recording, select “Send recording to Canvas”. The recording is transferred to this LTI service only long enough for Canvas to copy it into the assignment submission workflow. The temporary tool-side file expires automatically.</strong>';
      }
    }

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.className = 'primary-btn';
    submitButton.textContent = 'Send recording to Canvas';
    submitButton.disabled = true;

    const submitStatus = document.createElement('p');
    submitStatus.className = 'status-line';
    submitStatus.setAttribute('aria-live', 'polite');
    submitStatus.textContent = 'Finish the recording before sending it to Canvas.';

    controls.insertBefore(submitButton, controls.firstChild);
    outputPanel.appendChild(submitStatus);

    const newWindowButton = document.createElement('button');
    newWindowButton.type = 'button';
    newWindowButton.className = 'secondary-btn';
    newWindowButton.textContent = 'Open recorder in a new window';
    newWindowButton.addEventListener('click', function () {
      window.open(window.location.href, '_blank', 'noopener');
    });
    controls.appendChild(newWindowButton);

    function recordingIsReady() {
      return Boolean(recordedVideo.src) && downloadLink.getAttribute('aria-disabled') !== 'true';
    }

    const observer = new MutationObserver(function () {
      if (recordingIsReady()) {
        submitButton.disabled = false;
        submitStatus.textContent = 'Recording ready to send to Canvas.';
      }
    });

    observer.observe(downloadLink, { attributes: true, attributeFilter: ['aria-disabled', 'href'] });

    submitButton.addEventListener('click', async function () {
      if (!recordingIsReady()) return;

      submitButton.disabled = true;
      submitStatus.textContent = 'Preparing the recording for Canvas…';

      try {
        const blobResponse = await fetch(recordedVideo.src);
        if (!blobResponse.ok) throw new Error('Could not read the completed recording.');
        const videoBlob = await blobResponse.blob();

        const form = new FormData();
        form.append('launch_id', lti.launchId);
        form.append('video', videoBlob, 'sml3004-video-dialogue.webm');

        const response = await fetch('/api/recordings', {
          method: 'POST',
          body: form,
          credentials: 'omit'
        });

        const result = await response.json().catch(function () { return {}; });
        if (!response.ok || !result.return_to_canvas) {
          throw new Error(result.error || 'Canvas submission preparation failed.');
        }

        submitStatus.textContent = 'Recording prepared. Returning it to Canvas…';
        window.location.assign(result.return_to_canvas);
      } catch (error) {
        submitButton.disabled = false;
        submitStatus.textContent = error && error.message ? error.message : 'The recording could not be sent to Canvas.';
      }
    });
  });
})();
