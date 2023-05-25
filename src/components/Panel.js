import classNames from "classnames";
//sets the class names for easy implementation of panels and consistent styling

function Panel ({children, className, ...rest}) {
    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
        );

        return (<div {...rest} className={finalClassNames}>
            {children}
            </div>
        );

}

export default Panel;