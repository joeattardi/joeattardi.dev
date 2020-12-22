import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PageHeader({ children, icon }) {
  return (
    <div className="flex flex-row items-center space-x-2 font-thin">
      {icon ? 
        <div className="bg-blue-700 w-8 h-8 flex items-center justify-center rounded-lg text-white transform -rotate-6 shadow-lg">
          <FontAwesomeIcon icon={icon} fixedWidth={true} />
        </div> : null}
      <h2 className="text-4xl dark:text-blue-100 text-blue-900">
        {children}
      </h2>
    </div>
  )
}