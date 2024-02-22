import React from "react"

export const ParallaxSection = ({ children }: {children?: React.ReactNode}) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return (
        <div className={`flex items-center justify-center h-96 ${isMobile ? '' : 'bg-fixed bg-parallax bg-cover'}`}>
            {children}
        </div>
    )
}