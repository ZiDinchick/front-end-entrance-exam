async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resumeElement = document.getElementById('resume');

    const saveButton = document.querySelector('.save-button');
    saveButton.style.display = 'none';

    html2canvas(resumeElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const imgProps = doc.getImageProperties(imgData);
        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        doc.save('resume.pdf');
    });
}
