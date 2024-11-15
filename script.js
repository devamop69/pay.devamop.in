const text = "devam69@upi";

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Content copied to clipboard');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
};

// Optional: Add an event listener to a button to trigger the copy
document.getElementById('copyButton').addEventListener('click', copyContent);
