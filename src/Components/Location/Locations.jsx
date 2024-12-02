import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Locations.css";
import rocket from "../../Assets/Icons/rocket.jpg";
import rocketmark from "../../Assets/Icons/locationmark.png";

// Custom marker icon
const shopIcon = new L.Icon({
  iconUrl: rocketmark,
  iconSize: [42, 52],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const locations = [
  {
    lat: 11.0168,
    lng: 76.9558,
    name: "DETAILING WOLVES - Coimbatore",
    address: "123 Example Street, Coimbatore, Tamil Nadu",
    phone: "+91 123 456 7890",
  },
  {
    lat: 13.0827,
    lng: 80.2707,
    name: "DETAILING WOLVES - Chennai",
    address: "456 Sample Road, Chennai, Tamil Nadu",
    phone: "+91 987 654 3210",
  },
  {
    lat: 8.7294,
    lng: 77.9194,
    name: "DETAILING WOLVES - Kanyakumari",
    address: "789 Test Lane, Kanyakumari, Tamil Nadu",
    phone: "+91 456 789 0123",
  },
  {
    lat: 28.7041,
    lng: 77.1025,
    name: "DETAILING WOLVES - New Delhi",
    address: "123 New Street, New Delhi, India",
    phone: "+91 123 456 7890",
  },
  {
    lat: 19.076,
    lng: 72.8777,
    name: "DETAILING WOLVES - Mumbai",
    address: "456 Sample Lane, Mumbai, India",
    phone: "+91 987 654 3210",
  },
  {
    lat: 22.5726,
    lng: 88.3639,
    name: "DETAILING WOLVES - Kolkata",
    address: "789 Test Road, Kolkata, India",
    phone: "+91 456 789 0123",
  },
  {
    lat: 22.5726,
    lng: 88.3639,
    name: "DETAILING WOLVES - Kolkata",
    address: "789 Test Road, Kolkata, India",
    phone: "+91 456 789 0123",
  },
  {
    lat: 22.5726,
    lng: 88.3639,
    name: "DETAILING WOLVES - Kolkata",
    address: "789 Test Road, Kolkata, India",
    phone: "+91 456 789 0123",
  },
  {
    lat: 22.5726,
    lng: 88.3639,
    name: "DETAILING WOLVES - Kolkata",
    address: "789 Test Road, Kolkata, India",
    phone: "+91 456 789 0123",
  },
  {
    lat: 22.5726,
    lng: 88.3639,
    name: "DETAILING WOLVES - Kolkata",
    address: "789 Test Road, Kolkata, India",
    phone: "+91 456 789 0123",
  },
  {
    lat: 22.5726,
    lng: 88.3639,
    name: "DETAILING WOLVES - Kolkata",
    address: "789 Test Road, Kolkata, India",
    phone: "+91 456 789 0123",
  },
  {
    lat: 22.5726,
    lng: 88.3639,
    name: "DETAILING WOLVES - Kolkata",
    address: "789 Test Road, Kolkata, India",
    phone: "+91 456 789 0123",
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
      <div className="row">
        <div className="col text-center about-txt" data-aos="fade-down">
          Our Locations
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
                          <div  className="subdf"> {location.phone}</div>
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
    </div>
  );
};

export default Locations;
