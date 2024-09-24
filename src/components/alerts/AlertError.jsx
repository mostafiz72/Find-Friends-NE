import React from 'react'

export default function AlertError(props) {
  return (
    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-500 dark:bg-gray-800 dark:text-red-400" role="alert">
      {props.message}
    
</div>
  )
}
