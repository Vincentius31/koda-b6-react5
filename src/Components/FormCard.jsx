import React from 'react'

export default function FormCard({ title, children, required }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow">
            {title && (
                <h2 className="text-sm font-medium mb-4">
                    {title}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </h2>
            )}
            {children}
        </div>
    )
}
