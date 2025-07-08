import { convertText } from './textConverter';

function setupUI() {
    const inputText = document.getElementById('inputText');
    const conversionType = document.getElementById('conversionType');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    convertBtn.addEventListener('click', () => {
        const text = inputText.value;
        const type = conversionType.value;
        const converted = convertText(text, type);
        resultDiv.textContent = converted;
    });
}

document.addEventListener('DOMContentLoaded', setupUI);