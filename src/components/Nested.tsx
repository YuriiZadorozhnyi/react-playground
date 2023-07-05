import React, { memo, ReactNode } from "react";

interface NestedProps {
    children: ReactNode;
}

const Nested: React.FC<NestedProps> = ({ children  }) => {
    return (
        <>
            <div>Nested element:</div>
            <p>{ children }</p>
        </>

    )
}

export default memo(Nested)
