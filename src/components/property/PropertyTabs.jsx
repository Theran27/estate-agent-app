import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const PropertyTabs = ({ property }) => {
    return (
        <Tabs>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Floor Plan</Tab>
                <Tab>Location</Tab>
            </TabList>

            <TabPanel>
                <p>{property.longDescription}</p>
            </TabPanel>

            <TabPanel>
                <img
                    src={property.floorPlan}
                    alt="Floor plan"
                    style={{ width: "100%", maxWidth: "600px" }}
                />
            </TabPanel>

            <TabPanel>
                <iframe
                    title="Google Map"
                    width="100%"
                    height="300"
                    loading="lazy"
                    style={{ border: 0 }}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${property.location.lat},${property.location.lng}&z=15&output=embed`}
                />
            </TabPanel>
        </Tabs>
    );
};

export default PropertyTabs;
