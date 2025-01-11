import React, { useState } from "react";
import { Switch, FormControlLabel, Slider, Tooltip } from "@mui/material";
import './token-generator.css'

const TokenGenerator = () => {
    const [token, setToken] = useState("");
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);
    const [length, setLength] = useState(12); // Default length is 12

    // Function to generate a random token
    const generateToken = () => {
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/`~";
        let allCharacters = "";

        if (useUppercase) allCharacters += uppercase;
        if (useLowercase) allCharacters += lowercase;
        if (useNumbers) allCharacters += numbers;
        if (useSymbols) allCharacters += symbols;

        if (allCharacters === "") {
            setToken("Please select at least one character type.");
            return; // Return early if no character types are selected
        }

        let randomToken = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allCharacters.length);
            randomToken += allCharacters[randomIndex];
        }
        setToken(randomToken);
    };

    return (
        <div className="token-container">
            <h1>Token Generator</h1>
            <p>Generate a random string with the chars you want: uppercase or lowercase letters, numbers, and/or symbols.</p>

            <div>
                <div className="form-container">
                    <FormControlLabel
                        control={<Switch checked={useUppercase} onChange={() => setUseUppercase(!useUppercase)} />}
                        label="Uppercase (ABC...)"
                    />
                    <FormControlLabel
                        control={<Switch checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)} />}
                        label="Numbers (123...)"
                    />
                </div>
                <div className="form-container">
                    <FormControlLabel
                        control={<Switch checked={useLowercase} onChange={() => setUseLowercase(!useLowercase)} />}
                        label="Lowercase (abc...)"
                    />
                    <FormControlLabel
                        control={<Switch checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} />}
                        label="Symbols (!-;...)"
                    />
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                <p>Length ({length})</p>

                <Slider
                    value={length}
                    min={1}
                    max={512}
                    step={1}
                    onChange={(event, newValue) => setLength(newValue)}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => `${value}`}
                    sx={{
                        width: "40%",
                        color: "black", // Set the color of the filled part to black
                        "& .MuiSlider-thumb": {
                            backgroundColor: "black", // Set the thumb color to black
                        },
                        "& .MuiSlider-track": {
                            backgroundColor: "black", // Set the track color to black
                        },
                        "& .MuiSlider-rail": {
                            backgroundColor: "#d3d3d3", // Set the rail (unfilled) color to light gray
                        },
                    }}
                />
            </div>

            <div>
                <textarea style={{ width: "50%", height: "20vh", fontSize: "20px" }} readOnly value={token}></textarea>
            </div>

            <div>
                <Tooltip style={{ cursor: "pointer" }} title="copied...">
                    <button style={{ marginRight: "20px" }} onClick={() => navigator.clipboard.writeText(token)}>Copy</button>
                </Tooltip>
                <button style={{ marginRight: "20px", cursor: "pointer" }} onClick={generateToken}>
                    {token === "" ? "Generate Token" : "Regenerate Token"}
                </button>
                <button
                    style={{ cursor: "pointer" }}
                    onClick={() => setToken("")} // Clear the token state
                >
                    Refresh
                </button>
            </div>
        </div>
    );
};

export default TokenGenerator;
