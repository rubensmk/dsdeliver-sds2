import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AsyncSelect from 'react-select/async';
import { fetchLocalMapBox } from '../api';
import { OrderLocationdata } from './types';

const initialPosition = {
    lat: -1.388988,
    lng: -48.4668376,
}

type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    };
}

type Props = {
    onChangeLocation: (location: OrderLocationdata) => void;
}

function OrderLocation({ onChangeLocation }: Props) {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    });

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
                place: item.place_name,
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            address: place.label!
        });
    };

    return (
        <div className="order-location-container">
            <div className="order-location-content">
                <h3 className="order-location-title">Insira o seu endereco de entrega</h3>
                <div className="filter-container">
                    <AsyncSelect onChange={value => handleChangeSelect(value as Place)}
                        placeholder="Digite um endereco de entrega" loadOptions={loadOptions} className="filter">
                    </AsyncSelect>
                </div>
                <MapContainer center={address.position} zoom={15} scrollWheelZoom key={address.position.lat}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={address.position}>
                        <Popup>
                            {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}
export default OrderLocation;
