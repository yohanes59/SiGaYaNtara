import { Card, Pagination } from "../../components";

const createCultureHeritageList = (pageInformation, dataCagar) => {
    if (pageInformation.total_data > 0) {
        return dataCagar.map((item) => {
            return (
                <Card key={item._id} 
                src={`http://sigayantara-api.herokuapp.com/v1/${item.image}`} alt={item.nama} title={item.nama} city={item.kabupaten} category={item.jenis} _id={item._id} />
            );
        });
    } else {
        return (
            <div className="row justify-content-center">
                <div className="col-sm-8 bg-danger rounded-3 text-center p-2 mt-5">
                    <p className="text-white m-0">Belum ada data cagar budaya untuk ditampilkan.</p>
                </div>
            </div>
        )
    }
}

const createPagination = (pageInformation, counter, setCounter) => {
    const { total_data, per_page, current_page } = pageInformation;
    const total_page = Math.ceil(total_data / per_page);

    const previous = () => {
        setCounter(counter <= 1 ? 1 : (counter - 1));
    }

    const next = () => {
        setCounter(counter >= total_page ? total_page : (counter + 1));
    }

    if (total_data > 0) {
        return (
            <Pagination
                previous={previous}
                next={next}
                current_page={current_page}
                total_page={total_page}
            />
        );
    } else {
        return undefined;
    }
}

export { createPagination, createCultureHeritageList };