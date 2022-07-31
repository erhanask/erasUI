import React from 'react'

import { ErasButton } from 'erasui'
import 'erasui/dist/index.css'

const App = () => {
  return (
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"200px"}}>
    <div>
      Primary
    <ErasButton erastyle={{margin: '20px'}} text={`Test Text`} type={'primary'} />
    </div>
    <div>
      Default
    <ErasButton erastyle={{margin: '20px'}} text={`Test Text`} type={'default'} />
    </div>
    <div>
      Text
    <ErasButton erastyle={{margin: '20px'}} text={`Test Text`} type={'text'} />
    </div>
    <div>
      Dashed
    <ErasButton erastyle={{margin: '20px'}} text={`Test Text`} type={'dashed'} />
    </div>
    <div>
      Link
    <ErasButton erastyle={{margin: '20px'}} text={`Test Text`} type={'link'} />
    </div>
  </div>
  );
}

export default App
