import React , {useId} from 'react'

const Input = React.forwardRef(({
    lable ,
    type = "text",
    className = "",
    ...props
}, ref )=>{
    const id = useId()
    return <div className = 'w-full'>
        {
            lable && <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{lable}</label>
        }
        <input
          type={type}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white ${className}`}
          ref={ref} id={id}
          {...props}
        />
    </div>
})
export default Input
