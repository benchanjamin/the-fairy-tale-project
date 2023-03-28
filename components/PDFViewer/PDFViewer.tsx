import {useState} from "react";
// import default react-pdf entry
import {Document, Page, pdfjs} from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// @ts-ignore
import workerSrc from "@utils/pdf-worker";
import classes from "./PDFViewer.module.css"

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
    const [file, setFile] = useState("./sierra-arcadia.pdf");
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    return (
        <div className={`${classes.page}`}>
            <div className={`${classes.navClass}`}>
                <button
                    type="button"
                    className={`${classes.buttonVerticalClass} ${classes.previous} font-['cormorant-garamond']`}
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <button
                    type="button"
                    className={`${classes.buttonVerticalClass} ${classes.next} font-['cormorant-garamond']`}
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </div>
            <p className={`${classes.pageNumber} font-['cormorant-garamond']`}>
                Page
                {' '}
                <span className="font-bold">
                    {pageNumber}
                </span> of
                {' '}
                {numPages}
            </p>
            <section className={classes.flexPage}>
                <button
                    type="button"
                    className={`${classes.buttonHorizontalClass} ${classes.previous} font-['cormorant-garamond']`}
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
                </button>
                <Document
                    file={file}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber}
                          renderAnnotationLayer={false}
                          renderTextLayer={false}
                          canvasBackground="transparent"
                    />
                </Document>
                <button
                    type="button"
                    className={`${classes.buttonHorizontalClass} ${classes.next} font-['cormorant-garamond']`}
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
                </button>
            </section>
            <button className={classes.buttonDownload}>
                <a href="/sierra-arcadia.pdf">
                    Download

                </a>
            </button>
        </div>
    );
}
