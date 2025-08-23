import React, { useState } from 'react'
import WelcomeMessage from '@/components/home/WelcomeMessage';
import PromptInput from '@/components/home/PromptInput';
import SettingsPanel from '@/components/home/SettingsPanel';
import ResultImages from '@/components/home/ResultImages';

const HomePage = () => {
  const [inputState, setInputState] = useState({
    prompt: '',
    ratio: '1:1',
    model: '',
    width: 1024,
    height: 1024,
  });
  return (
    < main className="relative z-10" >
      <WelcomeMessage />
      <PromptInput setInputState={setInputState} />
      <SettingsPanel inputState={inputState} setInputState={setInputState}/>
      <ResultImages inputState={inputState}  />
    </main >
  )
}

export default HomePage;