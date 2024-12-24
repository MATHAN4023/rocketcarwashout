import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Locations.css";
import rocket from "../../Assets/Icons/rocket.jpg";
import rocketmark from "../../Assets/Icons/locationmark.png";
import Mainbranch from "../Mainbarnch/Mainbranck";

// Custom marker icon
const shopIcon = new L.Icon({
  iconUrl: rocketmark,
  iconSize: [42, 52],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const locations = [
  {
    lat: 11.076195688537155,
    lng: 77.02127803480288,
    name: "Rocket CarWash - Villankurichi",
    address: "67/1a, Kalapatti Main Road, Rathinagiri Nagar, Villankurichi, Coimbatore, Tamil Nadu 641035",
    phone: "+91 7947417502",
  },
  { 
    lat: 11.045309400354853,
    lng: 76.93949747471997,
    name: "Rocket CarWash - Koundampalayam",
    address: "204/3, TVS Nagar - Koundampalayam Road, Kannamal Nagar Rd, Ashok Nagar West, Koundampalayam, Coimbatore, Tamil Nadu 641030",
    phone: "+91 987 654 3210",
  },
  { 
    lat: 11.252753504728656,
    lng: 78.16651583341715,
    name: "Rocket CarWash - Namakkal",
    address: "Pon Nagar, Salem - Namakkal Rd, opposite to Indian Bank, Swamy Nagar, Namakkal, Tamil Nadu 637001",
    phone: "+91 7358847473",
  },
  { 
    lat: 13.085186376589453,
    lng: 80.1769089013419,
    name: "Rocket CarWash - Mogappair",
    address: " 141, Paneer Nagar Main Rd, VGP Nagar, Mogappair West, Mogappair, Chennai, Tamil Nadu 600037",
    phone: "+91 908 781 1110",
  },
  { 
    lat: 13.531302,
    lng: 78.617992,
    name: "Rocket CarWash - Andhra Pradesh",
    address: "Madanapalle Rd, gangavaram, palamaner, Reddivaripalle, Andhra Pradesh 517408",
    phone: "+91 987 654 3210",
  },
  
];

const MapFlyTo = ({ lat, lng }) => {
  const map = useMap();

  React.useEffect(() => {
    if (map) {
      map.flyTo([lat, lng], 15, { duration: 1 });
    }
  }, [lat, lng, map]);

  return null;
};

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationClick = (lat, lng) => {
    setSelectedLocation({ lat, lng });
  };

  return (
    <div className="container aboutcontainer my-5">
      <hr style={{ color: "white" }} />
      <div className="row">
        <div className="col text-center about-txt" data-aos="fade-down">
          Our Branches
        </div>
      </div>
      <div className="container1  my-5">
        <div className="c-a">
          <div className="list-container">
            <div className="search-container">
              <input
                type="text"
                className="search-bar"
                placeholder="Type a postcode or address..."
                style={{ backgroundColor: "white", color: "#000000" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="scrollable-list">
              <ul className="shop-list">
                {filteredLocations.map((location, index) => (
                  <div key={index} className="al-it">
                    <li>
                      <button
                        className="shop-link"
                        onClick={() =>
                          handleLocationClick(location.lat, location.lng)
                        }
                        style={{
                          background: "none",
                          border: "none",
                          textAlign: "left",
                          // padding: 0,
                          cursor: "pointer",
                        }}
                      >
                        <img src={rocket} style={{ width: "30px" }} alt="" />

                        <div className="df">
                          <div>{location.name} </div>
                          {/* <br /> */}
                          <div className="subdf"> {location.address}</div>
                          <div className="subdf"> {location.phone}</div>
                        </div>
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="map-container">
            <MapContainer center={[20.5937, 78.9629]} zoom={5} className="map">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
              />
              {filteredLocations.map((location, index) => (
                <Marker
                  key={index}
                  position={[location.lat, location.lng]}
                  icon={shopIcon}
                >
                  <Popup>
                    <strong>{location.name}</strong>
                    <br />
                    Address: {location.address}
                    <br />
                    Phone: {location.phone}
                  </Popup>
                </Marker>
              ))}
              {selectedLocation && (
                <MapFlyTo
                  lat={selectedLocation.lat}
                  lng={selectedLocation.lng}
                />
              )}
            </MapContainer>
          </div>
        </div>
      </div>

      <Mainbranch />
    </div>
  );
};

export default Locations;
