import React from 'react'

const Pagination = (props) => {
    const {previous, next, current_page, total_page} = props;
  return (
    <section>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous" onClick={previous}>
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li className="page-item"><p className="page-link">{current_page}   ||   {total_page}</p></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={next}>
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    </section>
  )
}

export default Pagination