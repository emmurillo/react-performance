import { randomElements } from '@/common/thirdParty'

const Scripts = () => {
  return (
    <div>
      <h1 style={{ color: "black" }}>Scripts</h1>
      <script
        dangerouslySetInnerHTML={{
          __html: `${randomElements()}`
        }}
      />
    </div>
  )
}

export default Scripts;