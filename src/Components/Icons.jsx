const horizontal = (size) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5 3H12.5V21H11.5V3ZM15.0039 12.5V11.5H17.0039V12.5H15.0039ZM19.0039 11.5V12.5H21.0039V11.5H19.0039ZM3 12.5V11.5H5V12.5H3ZM7 11.5V12.5H9V11.5H7Z" fill="currentColor"/>
        </svg>
    )
}

const horizontalRight = (size) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5 3H12.5V21H11.5V3ZM15.0039 12.5V11.5H17.0039V12.5H15.0039ZM19.0039 11.5V12.5H21.0039V11.5H19.0039Z" fill="currentColor"/>
        </svg>
    )
}

const horizontalLeft = (size) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5 3H12.5V21H11.5V3ZM3 12.5V11.5H5V12.5H3ZM7 11.5V12.5H9V11.5H7Z" fill="currentColor"/>
        </svg>
    )
}

const vertical = (size) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5 4.99805H12.5V2.99805H11.5V4.99805ZM12.5 8.99805H11.5V6.99805H12.5V8.99805ZM3.00195 12.5V11.5L21.002 11.5V12.5L3.00195 12.5ZM12.5 21.002H11.5V19.002H12.5V21.002ZM11.5 17.002H12.5V15.002H11.5V17.002Z" fill="currentColor"/>
        </svg>
    )
}

const verticalUp = (size) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.5 3.00244H12.5V5.00244H11.5V3.00244ZM21 11.5V12.5L3 12.5V11.5L21 11.5ZM12.5 7.00244H11.5V9.00244H12.5V7.00244Z" fill="currentColor"/>
        </svg>
    )
}

const verticalDown = (size) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M20.999 11.5V12.5L2.99902 12.5L2.99902 11.5H20.999ZM11.5 14.9979H12.5V16.9979H11.5V14.9979ZM12.5 18.9979H11.5V20.9979H12.5V18.9979Z" fill="currentColor"/>
        </svg>
    )
}

export {horizontal,vertical,horizontalRight,horizontalLeft,verticalUp,verticalDown}