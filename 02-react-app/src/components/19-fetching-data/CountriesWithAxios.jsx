import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";

const BASE_URL = import.meta.env.VITE_COUNTRIES_BASE_URL;

export default function CountriesWithAxios() {
    const [data, setData] = useState([]);
    //console.log(BASE_URL);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/all`);
            //console.log(response);
            const countriesData = response;
            console.log(countriesData);
            setData(countriesData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const stl = {
        height: 50,
        with: 30,
    };

    return (
        <Container>
            <h1 className="text-center text-danger">Fetching Data</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> # </th>
                        <th>Flag</th>
                        <th>Country Name</th>
                        <th>Polpulation</th>
                        <th>Capital</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((country, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <img
                                    src={
                                        country?.flags?.png ||
                                        country?.flags?.png ||
                                        "https://media-cdn.t24.com.tr/media/stories/2015/09/raw_ayi-yogiye-adini-veren-kisi-hayatini-kaybetti_749286339.jpg"
                                    }
                                    alt={`${
                                        country?.name?.common ||
                                        country?.name?.nativeName?.eng?.common
                                    }'s Flag`}
                                    title={`${
                                        country?.name?.common ||
                                        country?.name?.nativeName?.eng?.common
                                    }'s Flag`}
                                    style={stl}
                                ></img>
                            </td>
                            <td>{country?.name?.common}</td>
                            <td>{country?.population || "None"}</td>
                            <td>{country?.capital?.join(" - ") || " N/A"}</td>
                            <td>
                                {country?.currencies
                                    ? Object.keys(country.currencies).map(
                                          (key) => (
                                              <div key={key}>
                                                  {country.currencies[key]
                                                      ?.name || "N/A"}
                                              </div>
                                          )
                                      )
                                    : "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
