import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './CarsDetail.css'
import axios from "axios";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  console.log("CAR STATE:", car);

    useEffect(() => {
    const fetchCar = async () => {
        try {
        const res = await axios.get("https://spaceship-api.vercel.app/products");

        console.log("ID de la URL:", id);       // 👈 ACÁ
        console.log("DATA DE LA API:", res.data); // 👈 ACÁ
            
        const foundCar = res.data.find(
            (item) => item.id == id   // 👈 doble igual (IMPORTANTE)
        );

        console.log("AUTO ENCONTRADO:", foundCar); // 👈 EXTRA

        setCar(foundCar);
        } catch (err) {
        console.log(err);
        }
    };

    fetchCar();
    }, [id]);

  if (!car) return <p>No se encontró el auto 😢</p>;

  return (
    <section id="CarsDetail">
      <h1 className="carTitle">{car.brand} {car.model}</h1>
        <div className="car">
            <img src={car.carImg} alt="" className="carImage"/>
            <div className="carInfo">
              <p className="carMillage">Kilómetros: {car.km}</p>
              <p className="carYear">Año: {car.year}</p>
              <p className="carPrice">Precio: U$D {car.price}</p>
            </div>  
        </div>
    </section>
  );
};



export default CarDetail;