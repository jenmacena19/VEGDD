'use client'
import Styles from './page.module.css'
import Button from './components/button/button'
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter()
  const handleButtonClick = () => {
    router.push('/login');
  }
  return (
    <main className={Styles.container_page}>
      <div className={Styles.container_content}>
        <h1 className={Styles.container_title}>
          Educational Game Designer Document
        </h1>
        <p className={Styles.container_paragraph}>
          Um EGDD (Electronic Game Design Document), ou Documento de Design de Jogo Eletrônico, é um documento detalhado que descreve o design e a estrutura de um jogo. É uma ferramenta essencial no desenvolvimento de jogos, pois documenta todas as informações necessárias para orientar a equipe de desenvolvimento e garantir uma visão clara e consistente do jogo.
          No EGDD, são abordados diversos aspectos do jogo, como a história, mecânicas de jogo, personagens, níveis, arte, som e interface do usuário. Ele descreve a jogabilidade, os objetivos, as regras, os desafios e as recompensas que os jogadores encontrarão ao longo do jogo. Além disso, o documento pode incluir diagramas, esboços, fluxogramas e outros recursos visuais para facilitar a compreensão do design
        </p>
        <Button text='Comece agora' onClick={handleButtonClick} />
      </div>
    </main>
  )
}
