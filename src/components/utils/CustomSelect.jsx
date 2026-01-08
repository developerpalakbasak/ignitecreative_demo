"use client"
import React, { useState, useRef, useEffect } from "react"

const referralOptions = [
    { value: "search", label: "Web Design" },
    { value: "social", label: "Branding" },
    { value: "friend", label: "Marketing" },
    { value: "other", label: "Other" },
]

const CustomSelect = ({ name, required }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState({ value: "", label: "--Select an option--" })
    const [openUpward, setOpenUpward] = useState(false) // track direction
    const dropdownRef = useRef(null)

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    // Calculate whether to open up or down
    const toggleDropdown = () => {
        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect()
            const spaceBelow = window.innerHeight - rect.bottom
            const dropdownHeight = 200 // estimate height, adjust if needed
            setOpenUpward(spaceBelow < dropdownHeight)
        }
        setIsOpen(!isOpen)
    }



    return (
        <div className="relative w-full" ref={dropdownRef}>
            {/* Trigger button */}
            <button
                type="button"
                onClick={toggleDropdown}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent text-left focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-white"
            >
                {selected.label}
            </button>

            {/* Dropdown options */}
            {isOpen && (
                <ul
                    className={`absolute z-10 w-full border border-gray-300 rounded-lg bg-slate-950 shadow-lg ${
                        openUpward ? "bottom-full mb-1" : "mt-1 top-full"
                    }`}
                >
                    {referralOptions.map((option,index) => (
                        <li
                            key={option.value}
                            onClick={() => {
                                setSelected(option)
                                setIsOpen(false)
                            }}
                            className={`px-4 text-white py-3 cursor-pointer hover:bg-blue-100/20 ${index+1 < referralOptions.length?"border-b":""}`}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}

            {/* Hidden input to submit value in form */}
            <input type="hidden" name={name} className="text-white" value={selected.value} required={required} />
        </div>
    )
}

export default CustomSelect
