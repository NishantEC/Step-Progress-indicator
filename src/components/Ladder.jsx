import React from 'react'

// type LadderType = {
//   id: number
//   name: string
//   description: string
//   steps: LadderType[]
//  icon: React.ReactNode
// }

// const Step = ({ id, name, description }: Omit<LadderType, 'steps'>) => {

const Step = ({ id, name, description, icon }) => {
  return (
    <div
      className="relative flex flex-col items-start py-4 pl-8 
    "
    >
      <div
        className="w-8 h-full absolute 
        -left-4 top-1/2  -translate-y-1/2
        flex items-center justify-center"
      >
        <div
          className="w-0 h-1/2 border-l-2 border-gray-300  border-dashed absolute 
          top-0 left-1/2 -translate-x-1/2
    top-divider
        "
        />
        <div
          className="w-8 h-8 bg-gray-300 rounded-full 
        
        "
        >
          {icon}
        </div>
        <div
          className="w-0 h-1/2 border-l-2 border-gray-300  border-dashed absolute 
      bottom-0 left-1/2 -translate-x-1/2
      bottom-divider

      "
        />
      </div>

      <h2
        className="text-lg font-semibold 
        text-gray-200"
      >
        {name}
      </h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}

const Ladder = ({ id, name, description, steps, icon }) => {
  return (
    <div
      className="[:first-of-type&>div>div>div.top-divider]:hidden
    [:last-of-type&>div>div>div.bottom-divider]:hidden
    "
    >
      <Step id={id} name={name} description={description} icon={icon} />
      {steps ? (
        <div className="flex flex-col items-start relative pl-8">
          <LadderGroup steps={steps} />
        </div>
      ) : null}
    </div>
  )
}

const LadderGroup = ({ steps }) => {
  return (
    <div className="">
      {steps.map(step => (
        <Ladder key={step.id} {...step} />
      ))}
    </div>
  )
}

export default LadderGroup
