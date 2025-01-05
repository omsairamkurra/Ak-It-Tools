import React from "react";
import "./sidebar.css";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import TokenIcon from '@mui/icons-material/Token';
import TagIcon from '@mui/icons-material/Tag';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import HideSourceIcon from '@mui/icons-material/HideSource';
import Rotate90DegreesCcwIcon from '@mui/icons-material/Rotate90DegreesCcw';
import LockIcon from '@mui/icons-material/Lock';
import MenuIcon from '@mui/icons-material/Menu';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import KeyIcon from '@mui/icons-material/Key';
import PasswordIcon from '@mui/icons-material/Password';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

//convertor
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Looks3Icon from '@mui/icons-material/Looks3';
import CloseIcon from '@mui/icons-material/Close';

const Sidebar = ({ toggleSidebar, isDarkTheme, onItemClick }) => {

    const toggleDropdown = (id) => {
        const dropdown = document.getElementById(id);
        if (dropdown) {
            dropdown.classList.toggle('hidden'); // Show/hide dropdown
        }
    };

    return (
        <div className={`app ${isDarkTheme ? "dark-theme" : ""}`}>
            {/* Sidebar */}

            <div>
                <div className="cancel-button" onClick={toggleSidebar}>
                    <CloseIcon />
                </div>
                <div class="tools-header">
                    <h3>AK-IT-Tools</h3>
                    <p>Handy tools for developers.</p>
                </div>
                <div class="container">
                    <div className="item" onClick={() => toggleDropdown('crypto-dropdown')}>
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Crypto</span>
                    </div>
                    <div id="crypto-dropdown" class="dropdown hidden">
                        <div class="dropdown-item" onClick={() => onItemClick("tokenGenerator")}>
                            <i class="icon">
                                <TokenIcon />
                            </i>
                            <span>Token Generator</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <TagIcon />
                            </i>
                            <span>Hash Generator</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <EnhancedEncryptionIcon />
                            </i>
                            <span>Bcrypt</span>
                        </div>

                        <div class="dropdown-item">
                            <i class="icon">
                                <HideSourceIcon />
                            </i>
                            <span>UUIDs generator</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <Rotate90DegreesCcwIcon />
                            </i>
                            <span>ULID Generator</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <LockIcon />
                            </i>
                            <span>Encrypt / decrypt text</span>
                        </div>

                        <div class="dropdown-item">
                            <i class="icon">
                                <MenuIcon />
                            </i>
                            <span>BIP39 passphrase generator</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <DragHandleIcon />
                            </i>
                            <span>Hmac Generator</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <KeyIcon />
                            </i>
                            <span>RSA key pair generator</span>
                        </div>

                        <div class="dropdown-item">
                            <i class="icon">
                                <PasswordIcon />
                            </i>
                            <span>Password strength analyser</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <PictureAsPdfIcon />
                            </i>
                            <span>PDF signature checker</span>
                        </div>

                    </div>
                    <div className="item" onClick={() => toggleDropdown('converter-dropdown')}>
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Converter</span>
                    </div>
                    <div id="converter-dropdown" class="dropdown hidden">
                        <div class="dropdown-item">
                            <i class="icon">
                                <CalendarMonthIcon />
                            </i>
                            <span>Date-time converter</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <CompareArrowsIcon />
                            </i>
                            <span>Integer base converter</span>
                        </div>
                        <div class="dropdown-item">
                            <i class="icon">
                                <Looks3Icon />
                            </i>
                            <span>Roman numeral converter</span>
                        </div>

                        <div class="dropdown-item">
                            <i class="icon">
                                <EnhancedEncryptionIcon />
                            </i>
                            <span>Base64 string encoder/decoder</span>
                        </div>
                    </div>

                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Web</span>
                    </div>
                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Images and Videos</span>
                    </div>
                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Development</span>
                    </div>
                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Network</span>
                    </div>
                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Math</span>
                    </div>
                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Measurement</span>
                    </div>
                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Text</span>
                    </div>
                    <div class="item">
                        <span class="symbol"><MenuOpenIcon /></span>
                        <span class="text">Data</span>
                    </div>
                </div>

                <div class="sidebar-footer">
                    <h3>Ak-IT-Tools © 2025 Ram kurra</h3>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
