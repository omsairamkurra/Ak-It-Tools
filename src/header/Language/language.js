import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const LanguageDropdown = ({ isDarkTheme }) => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");

    const languages = [
        "English",
        "Telugu",
        "Hindi",
        "Kannada",
        "Tamil",
        "Malayalam",
        "Spanish",
        "French",
    ];

    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className="language-dropdown">
            <Select
                value={selectedLanguage}
                onChange={handleChange}
                displayEmpty
                variant="outlined"
                style={{
                    width: "150px",
                    height: "30px",
                    color: isDarkTheme ? "white" : "black", // White text in dark theme
                    backgroundColor: isDarkTheme ? "#333" : "white", // Dark background for dropdown
                }}
            >
                {languages.map((language, index) => (
                    <MenuItem
                        key={index}
                        value={language}
                        style={{
                            color: "black", // Ensures dropdown item text is always black
                        }}
                    >
                        {language}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default LanguageDropdown;
