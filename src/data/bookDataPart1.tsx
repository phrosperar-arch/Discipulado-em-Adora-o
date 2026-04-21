import React from 'react';
import { VerseQuote } from '../components/ui/VerseQuote';
import { HighlightBox } from '../components/ui/HighlightBox';
import { ActionBox } from '../components/ui/ActionBox';
import { Chapter } from './bookData';

export const bookData: Chapter[] = [
  {
    id: 0,
    title: "Apresentação",
    content: (
      <>
        <p className="mb-4">Adoração é a resposta humana à glória de Deus revelada na alma pelo evangelho. Isso significa que adoração não é um estilo de música. É um estilo de vida. É a base para tudo o que fazemos (1Co.10.31). Não pode ser um momento. Deve ser um respirar (fora do culto) e um inspirar (no culto).</p>
        <p className="mb-4">O momento do louvor não é um receber. É um derramar do que se recebeu! O louvor deve servir à Palavra, e a Palavra inspirar o louvor. Ambos devem se derramar na vida. Isso deixa claro quão importante é o papel dos que ministram o louvor tanto quanto é importante dos que ministram a palavra, e que a vida de ambos deve ser encharcada da glória de Deus revelada pelo evangelho de Jesus Cristo.</p>
        <HighlightBox title="OBJETIVOS DESTE MATERIAL">
          <ul className="list-disc pl-5 space-y-2">
            <li>Mostrar como a visão do evangelho da glória afeta a visão de Deus.</li>
            <li>Mostrar como a visão do evangelho da glória afeta a visão de si mesmo.</li>
            <li>Mostrar como a visão do evangelho da glória afeta a vida.</li>
            <li>Mostrar como a visão do evangelho da glória afeta o culto e ministérios.</li>
          </ul>
        </HighlightBox>
      </>
    )
  },
  {
    id: 1,
    title: "1. O Perigo De Oferecer Fogo Estranho Ao Senhor",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4 text-rose-700 dark:text-rose-400">INTRODUÇÃO</h3>
        <p className="mb-4">Você já se sentiu mal após ministrar um período de louvor com a congregação? Como se estivesse fazendo alguma coisa errada? Sabe explicar o que aconteceu?</p>
        <p className="mb-4">O que você espera que aconteça no momento do louvor?</p>
        <p className="mb-8">Duas coisas podem acontecer quando viemos adorar a Deus: Ou há um fogo para consumir aquilo que lhe oferecemos, (recebendo) ou há um fogo para consumir a nossa alma (reprovando).</p>
        
        <p className="mb-2 italic">E quando é que oferecemos fogo estranho ao Senhor?</p>
        <h4 className="text-[1.05rem] font-bold mb-4 text-rose-700 dark:text-rose-400 uppercase">
          Oferecemos fogo estranho ao Senhor quando queremos produzir reação no povo com artifícios humanos. (A Atitude Errada)
        </h4>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Nadabe e Abiú, filhos do sumo sacerdote Arão, usaram seu próprio fogo para acender o holocausto ao invés de usarem o fogo aceso por Deus.</li>
          <li>Fogo no Antigo Testamento era um sinal de aceitação divina. (Foi com Elias 1Re.18.24; Gideão Jz.6.21; Davi 2Cr.21.26; Salomão 2Cr.7.1-3).</li>
          <li>Aqui com Arão, quem acendeu o fogo sobre o altar foi o próprio Deus manifestando sua misericórdia em aceitar aquelas ofertas pelo pecado do povo e de seus líderes. (Lv.9.23,24).</li>
        </ul>

        <VerseQuote text="Assim Moisés e Arão entraram na Tenda do Encontro. Quando saíram, abençoaram o povo; e a glória do Senhor apareceu a todo o povo. Saiu fogo da presença do Senhor e consumiu o holocausto e as porções de gordura sobre o altar. E, quando todo o povo viu isso, gritou de alegria e prostrou-se rosto em terra." refText="(Lv.9.23,24)" />
        
        <p className="mb-4"><strong className="text-rose-700 dark:text-rose-400">APLICAÇÃO</strong><br/> O papel dos líderes adoradores não era acender o fogo, mas manter o fogo original da glória aceso, e deste fogo fazer uso na adoração. Aqui estava o grande pecado de Nadabe e Abiú. E aqui está o nosso maior pecado na adoração.</p>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <ul className="list-disc pl-5 space-y-2">
            <li>Se ministramos ao Senhor, por que queremos tanto que o povo reaja ao que fazemos?</li>
            <li>O primeiro tópico diz: “oferecemos fogo estranho ao Senhor quando queremos produzir reação no povo com artifícios humanos” Como normalmente (consciente ou inconscientemente) fazemos isso?</li>
            <li>O que nos leva a tentar produzir a reação do povo?</li>
          </ul>
        </HighlightBox>

        <p className="mb-2 mt-8 italic">Quando oferecemos fogo estranho a Deus?</p>
        <h4 className="text-[1.05rem] font-bold mb-4 text-rose-700 dark:text-rose-400 uppercase">
          Oferecemos fogo estranho ao Senhor quando queremos receber glória que pertence a Deus pela reação do povo (A Motivação Errada)
        </h4>
        <p className="mb-4">Por trás do nosso desejo da reação do povo pode estar o nosso desejo em receber a glória por isso.</p>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Arão não fez força alguma para adorar a Deus. Mas veja o que aconteceu quando ele adorou ao Senhor? (Lv.9.23,24)</li>
          <li>Deus respondeu a obediência de Arão pela confiança no que Ele mesmo prometeu. (Lv.9.1-7)</li>
        </ul>

        <VerseQuote text='Disse Moisés a Arão: "Venha até o altar e ofereça o seu sacrifício pelo pecado e o seu holocausto, e faça propiciação por você mesmo e pelo povo; ofereça o sacrifício pelo povo e faça propiciação por ele, conforme o Senhor ordenou"' refText="(v.7)" />

        <p className="mb-4"><strong className="text-rose-700 dark:text-rose-400">APLICAÇÃO</strong></p>
        <ul className="list-disc pl-5 space-y-3 mb-8">
          <li>Não podemos afirmar com certeza qual foi a motivação dos dois filhos de Arão, mas bem serve para mostrar qual não deve ser a nossa. Se o nosso foco for de fato a glória de Deus, não ficaremos ansiosos pela reação das pessoas.</li>
          <li>Você não adora a Deus se exaltando diante das pessoas, mas sim se humilhando e exultando diante da glória de Deus. A glória do homem está em se encontrar prazerosamente humilhado diante da glória de Deus.</li>
          <li>Mas o pecado na adoração está em tentar manipular o povo ou a Deus para receber algum tipo de louvor.</li>
        </ul>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">COMO O EVANGELHO PURIFICA A NOSSA ADORAÇÃO?</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-8">
          <li>Por que Deus não simplesmente repreendeu os filhos de Arão para que não fizessem mais aquilo? Por que os matou?</li>
          <li>Precisamos entender que o que está em jogo aqui é a glória da santidade de Deus (Lv.10.3). E não há nada com o qual Deus tenha mais compromisso senão em preservar a sua glória diante de suas criaturas. Além disso, a nossa satisfação plena depende da Glória de Deus. Então, quando a glória de Deus não é devidamente honrada por nós, deve ser devidamente honrada por Ele.</li>
          <li>Deus matou os sacerdotes, filhos de Arão, e Arão ficou em silêncio como sinal de aprovação (Lv.10.3). Arão amava seus filhos, mas amava muito mais ainda a glória de Deus.</li>
          <li>Não podemos negar que, por diversas vezes, cometemos o mesmo tipo de pecado dos filhos de Arão. Por que Deus não nos tira a vida?</li>
          <li>A resposta é que Deus já puniu com morte estes nossos pecados. Ele puniu no seu Filho perfeito, o grande sumo e sacerdote, Jesus Cristo. Na cruz, quando Cristo, o Sumo sacerdote filho de Deus estava em agonia na morte, o Pai também ficou em silêncio. (Mt.27.46).</li>
          <li>Cristo evidentemente foi um sumo sacerdote incomparavelmente melhor que Arão, a quem Deus aprovou a adoração. No entanto Deus tratou seu Filho como os filhos de Arão mereceram; como nós merecemos, para nos tratar para sempre como Jesus merece ser tratado.</li>
          <li>Deus obviamente amava seu Filho. Mas para manifestar ainda mais a glória da sua graça a pecadores, naquele momento, nos amou mais que seu Filho. Tudo isso deve nos constranger profundamente a fim de rejeitarmos qualquer tentação do coração de receber na adoração, glória que pertence somente a Deus.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p>Se eu já tenho o privilégio de participar da glória da graça de Deus, por que continuar usando as coisas de Deus para o meu próprio louvor e valor?</p>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">CONCLUSÃO</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-8">
          <li>O evangelho nos dá tanto prazer pela glória de Deus, que a possibilidade de receber glória dos homens perde a força.</li>
          <li>O fogo de Deus para sua adoração, é a paixão que ele acendeu em seu coração por oferecer o Filho Jesus em seu lugar.</li>
          <li>Para que a nossa adoração seja purificada, precisamos que Deus nos dê prazer mais na glória Dele do que na glória que os homens querem nos dar.</li>
          <li>Arrependemo-nos! Confessemos! Oremos!</li>
        </ul>

        <ActionBox title="ALINHAMENTO">
          <ul className="list-none space-y-6 font-medium">
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Do que acha que deve se arrepender?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• O que sente que deve pedir a Deus agora?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Como acredita que Cristo e sua obra te ajuda nisso?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
          </ul>
        </ActionBox>
      </>
    )
  },
  {
    id: 2,
    title: "2. Adoração Debaixo da Graça",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4 text-rose-700 dark:text-rose-400 uppercase">INTRODUÇÃO</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Você já parou para pensar que a verdade mais profunda a respeito de adoração ensinada por Jesus foi dita a uma mulher confusa, frustrada, rejeitada e de moral duvidosa?</li>
          <li>Jesus disse: “está chegando a hora, e de fato já chegou, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. São estes os adoradores que o Pai procura.” (Jo.4.23).</li>
          <li>Jesus não está dizendo que não existiam verdadeiros adoradores, mas sim que, até aquele momento não havia ainda acontecido uma verdadeira adoração.</li>
          <li>Por que ainda não havia acontecido a verdadeira adoração?</li>
          <li>Jesus está declarando que até aquele momento, ainda não havia chegado o tempo de uma verdadeira adoração, porque todos os adoradores ainda estavam vivendo debaixo da lei e não debaixo da graça.</li>
          <li>Para entender por que não existe adoração verdadeira debaixo da Lei, precisamos entender como era a adoração debaixo da Lei.</li>
        </ul>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">COMO É A ADORAÇÃO DEBAIXO DA LEI?</h3>
        <p className="mb-4 font-medium italic">O Amor Que Temos Por Deus É Baseado Na Noção Espiritual Do Amor Que Ele Tem Por Nós.</p>

        <p className="mb-2 uppercase text-sm font-bold text-gray-500">ENTENDENDO...</p>
        <VerseQuote text="Nós amamos, porque Ele nos amou primeiro" refText="(1Jo.4.19)" />
        <ul className="list-decimal pl-5 space-y-3 mb-8">
          <li>Assim, se nossa noção do amor de Deus for pequena (e sempre é) nosso amor por Ele também será. À medida que conhecemos a imensidão do amor de Deus por nós, nosso amor por Ele naturalmente aumenta. (Ef.1.17-20; 3.14-19).</li>
          <li>O adorador do A.T. vivia debaixo da Lei, e por isso acreditava que o favor e amor de Deus em sua vida era consequência da fidelidade e vida correta que ele vivia. Ou seja, suas obras determinavam o grau do amor de Deus por ele. Ele até cria que Deus poderia amá-lo muito, mas isso dependeria do seu amor obediente. Se cumpria suas obrigações, colocava Deus como devedor, como o rei Ezequias, por exemplo (Is.38.3; Nm.5.19; 13.14).</li>
          <li>Assim se vê, que a adoração debaixo da lei, não se baseia no amor real, mas numa relação de troca. Debaixo da Lei a vida de adoração é motivada pela obrigação e não pela gratidão. Pelo dever e não pelo amor. Pelo benefício ínfimo a receber e não pelo grandioso benefício já recebido. Deus não está procurando adoradores assim. Ele já os rejeitou (Is.1.11-15).</li>
        </ul>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">EXISTE UMA ANSIOSA BUSCA EM DEUS</h3>
        <p className="mb-4 italic">“...porque são estes que o Pai procura para seus adoradores.”</p>
        <p className="mb-8">Deus quer não apenas adoradores. Não apenas verdadeiros adoradores. Deus quer verdadeiros adoradores vivendo uma verdadeira vida de adoração. Aqui a pergunta é qual: QUAL É A VERDADEIRA ADORAÇÃO? A verdadeira adoração é a adoração debaixo da Graça.</p>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">ADORAÇÃO DEBAIXO DA GRAÇA</h3>
        <VerseQuote text="Nós amamos porque ele nos amou primeiro" refText="1 João 4:19" />
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Só sou capaz de viver a verdadeira adoração quando compreendo a natureza e dimensão do amor de Deus por mim.</li>
          <li>A lei é a expressão máxima da santidade de Deus. Mas a graça é a expressão máxima do seu amor. E o tipo de amor necessário para haver uma verdadeira adoração, não pode ser produzido por homem algum, pois é um amor sem reservas.</li>
          <li>Por isso é que precisamos da recepção do infinito amor de Deus para que em nosso coração possa então ser produzido este poderoso amor por Deus.</li>
          <li>A verdadeira adoração acontece pelo transbordar deste amor. E como Deus produz este poderoso amor em nossos corações? Revelando seu infinito amor por nós em JESUS.</li>
        </ul>

        <VerseQuote text="Nisto consiste o amor: não em que nós tenhamos amado a Deus, mas em que ele nos amou e enviou o seu Filho como propiciação pelos nossos pecados." refText="1 João 4:10" />
        <p className="mb-8">Veja o exemplo desta verdade na mulher pecadora (Lc.7.47). em Zaqueu (Lc.19.1-10) e ensinado por Paulo (2Co.5.14).</p>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6 pt-2 pb-2">
            <div>
              <p className="mb-2">O quanto sua expectativa sobre o amor de Deus por você é influenciada por sua obediência a ele?</p>
              <div className="flex justify-between text-xs text-rose-600 font-medium px-1"><span>0</span><span>2</span><span>5</span><span>7</span><span>10</span></div>
              <input type="range" min="0" max="10" className="w-full accent-rose-700 mt-1" />
            </div>
            <div>
              <p className="mb-2">Quanto você acredita que Cristo e sua obra perfeita é a base do amor de Deus por você?</p>
              <div className="flex justify-between text-xs text-rose-600 font-medium px-1"><span>0</span><span>2</span><span>5</span><span>7</span><span>10</span></div>
              <input type="range" min="0" max="10" className="w-full accent-rose-700 mt-1" />
            </div>
            <div>
              <p className="mb-2">Quanto você é grato a Cristo pelo que Ele fez por você?</p>
              <div className="flex justify-between text-xs text-rose-600 font-medium px-1"><span>0</span><span>2</span><span>5</span><span>7</span><span>10</span></div>
              <input type="range" min="0" max="10" className="w-full accent-rose-700 mt-1" />
            </div>
            <div>
              <p className="mb-2">Quanto sua gratidão a Cristo influencia sua vida diária?</p>
              <div className="flex justify-between text-xs text-rose-600 font-medium px-1"><span>0</span><span>2</span><span>5</span><span>7</span><span>10</span></div>
              <input type="range" min="0" max="10" className="w-full accent-rose-700 mt-1" />
            </div>
          </div>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">UMA VERDADE PODEROSA PARA ADORAÇÃO: ELE NOS AMOU QUANDO AINDA ÉRAMOS SEU INIMIGO.</h3>
        <VerseQuote text="Nós amamos porque ele nos amou primeiro." refText="1 João 4:19" />
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>João está ensinando que é o amor de Deus por nós que gera o nosso amor por Ele. Que sem o amor de Deus, nosso coração não poderia produzir este tipo de amor que resiste aos amores do mundo e do pecado. Que o nosso amor é fraco porque nosso coração não compreende o quanto Deus nos ama.</li>
          <li>Jesus é a revelação mais concreta do amor que Deus tem por nós. Em Cristo eu compreendo que o amor de Deus por mim não muda porque eu mudo.</li>
          <li>Em Cristo eu compreendo que Deus me aceita não por causa do meu mérito, mas por causa da obra de Cristo.</li>
          <li>Em Cristo eu compreendo que Deus não me vê como escravo e nem me trata como tal. Ele me vê e me trata como filho, em Cristo.</li>
        </ul>
        <p className="mb-8 font-bold text-lg text-center text-rose-700 dark:text-rose-400">Só existe adoração em Cristo!</p>

        <p className="mb-2"><strong className="text-rose-700 dark:text-rose-400 uppercase">APLICAÇÃO</strong></p>
        <p className="mb-6 italic text-[1.05rem]">“O ladrão da alegria e da força chama-se ingratidão. O ladrão da gratidão chama-se mérito.” <span className="text-sm text-gray-500">(Marcio Gonçalves)</span></p>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-4">No fundo do seu coração, você acha que Deus deveria te amar? Te salvar? Te abençoar? Te dar uma vida boa ou melhor?</p>
          <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
        </HighlightBox>

        <p className="mb-2 mt-6"><strong className="text-rose-700 dark:text-rose-400 uppercase">APLICAÇÃO</strong></p>
        <p className="mb-8">Sua noção de mérito, saiba ou não, tem minado todo poder espiritual do seu coração para adorar a Deus pela graça recebida.</p>

        <ActionBox title="ALINHAMENTO">
          <ul className="list-none space-y-6 font-medium">
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Do que acha que deve se arrepender?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• O que sente que deve pedir a Deus agora?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Como acredita que Cristo e sua obra te ajuda nisso?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
          </ul>
        </ActionBox>
      </>
    )
  },
  {
    id: 3,
    title: "3. Adoração em Espírito",
    content: (
      <>
        <VerseQuote text='“No entanto, está chegando a hora, e de fato já chegou, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. São Estes os adoradores que o Pai procura. Deus é espírito, e é necessário que os seus adoradores o adorem em espírito e em verdade"' refText="Jo.4.23,24" />

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">INTRODUÇÃO</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-8">
          <li>A expressão “é necessário” significa sem o qual é impossível. É necessária uma adoração em espírito e uma adoração em verdade.</li>
          <li>Perceba que já havia verdadeiros adoradores, mas não verdadeira adoração. “está chegando a hora ...os verdadeiros adoradores adorarão o Pai em espírito e em verdade.”</li>
          <li>Espírito aqui, não se refere ao Espírito Santo, mas a nosso espírito, ou alma, ou coração.</li>
          <li>Adorar em espírito é adorar com o coração em oposição a hipocrisia. É o sentido das expressões frequentes dos salmos como: “De todo o coração” ou “com toda a minha alma”.</li>
          <li>Adorar em espírito é adorar de verdade. É ser totalmente autêntico e verdadeiro na adoração. Jesus está dizendo que isso é necessário dos adoradores para que a adoração seja verdadeira.</li>
        </ul>

        <p className="mb-4 italic">O que podemos aprender baseado no que Jesus está ensinando aqui sobre adoração em ESPÍRITO?</p>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">SUA VONTADE PODE DECIDIR O QUE O SEU CORAÇÃO NÃO DESEJA.</h3>
        <p className="mb-4 font-medium italic">A Escolha, Como Força De Vontade, É Necessária Quando Não Há Desejo.</p>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Quando há desejo real a escolha é espontânea e necessária. Você pode estar obedecendo a Deus sem estar adorando a Deus, quando obedecer a Deus não é que o seu coração deseja no momento.</li>
          <li>Noutras palavras, somos capazes de decidir por aquilo que o coração ainda não deseja. Pra Cristo, isso invalida a adoração.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2">Como você se identifica com isso?</p>
          <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">SEU CORPO PODE FAZER O QUE O SEU CORAÇÃO NÃO DESEJA.</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Podemos dar ordem ao corpo sem fazer obedecer o coração. O corpo está dançando e a alma passiva. A voz cantarolando e o coração emudecido. Sim ou não?</li>
          <li>Assim, Jesus está ensinando que mesmo que sua vontade escolha e o seu corpo faça, se o seu coração não deseja, não há adoração.</li>
        </ul>

        <VerseQuote text='“Este povo me honra com os lábios, mas o seu coração está longe de mim. Em vão me adoram..."' refText="Mt.15.8" />
        <VerseQuote text='“O meu povo vem a você, como costuma fazer, e se assenta diante de você para ouvir as suas palavras, mas não as põe em prática. Com a boca eles expressam devoção, mas o coração deles está ávido de ganhos injustos.”' refText="Ez.33.31" />
        
        <ul className="list-decimal pl-5 space-y-3 mb-8" start={3}>
          <li>Ou seja, deveria, mas nem sempre há uma sincronia entre o coração (espírito) e o corpo. É muito fácil adorar a Deus com os lábios ou com o corpo sem adorá-lo com o coração. E para Cristo, isso não é adoração verdadeira.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2">Como você se identifica com isso?</p>
          <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">ADORAÇÃO EM ESPÍRITO É O DESEJO CONQUISTADO PELO DEUS ENCANTADOR.</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-4">
          <li>É quando Deus é tão encantador para seu coração que o coração simplesmente sorri quando pensa em Deus. É quando Deus é tão valioso para seu coração que seu coração renuncia qualquer coisa para ter mais de Deus e é capaz de fazer qualquer sacrifício por Seu valor. Sacrifícios que se transformam em prazer. Deus é aquilo mesmo que seu coração quer!</li>
          <li>Você não quer porque deve querer ou apenas porque é importante querer. É quando você quer porque se encanta e o deseja.</li>
        </ul>

        <p className="mb-4 font-bold text-center text-rose-700 dark:text-rose-400">Seus sentimentos por Deus autenticam sua adoração.</p>

        <ul className="list-decimal pl-5 space-y-3 mb-4" start={3}>
          <li>Como podemos realinhar nosso coração a uma adoração em espírito?</li>
        </ul>
        <VerseQuote text="Rasgai Os Vossos Corações E Não As Vossas Vestes" refText="Jl.2.13" />

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2">O que o Senhor está corrigindo aqui?</p>
          <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
        </HighlightBox>

        <p className="mb-4 mt-8 italic">Há três situações nas quais seus sentimentos autenticam sua adoração a Deus:</p>
        <ul className="list-disc pl-5 space-y-3 mb-8">
          <li>Quando estamos totalmente satisfeitos e deleitando-se em Deus.</li>
          <li>Quando ainda não estamos satisfeitos, mas ansiamos desesperadamente por isso.</li>
          <li>Quando estamos completamente sem desejo por Deus, secos de sentimentos, mas profundamente tristes em nós mesmos por isso.</li>
        </ul>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-rose-700 dark:text-rose-400 font-bold">• A sua realidade representa algo diferente desses três?</p>
              <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
            </div>
            <div>
              <p className="mb-2 text-rose-700 dark:text-rose-400 font-bold">• E qual seria sua realidade?</p>
              <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
            </div>
          </div>
        </HighlightBox>

        <ActionBox title="ALINHAMENTO">
          <ul className="list-none space-y-6 font-medium">
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Do que acha que deve se arrepender?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• O que sente que deve pedir a Deus agora?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Como acredita que Cristo e sua obra te ajuda nisso?</span>
              <div className="w-full h-16 border-b border-gray-300 dark:border-zinc-700 mt-2 rounded bg-white/50 dark:bg-zinc-900/50"></div>
            </li>
          </ul>
        </ActionBox>
      </>
    )
  },
  {
    id: 4,
    title: "4. Adoração em Verdade",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4 mt-4 text-rose-700 dark:text-rose-400 uppercase">ENQUANTO SENTIMENTOS AUTENTICAM A ADORAÇÃO, A VERDADE AUTENTICA OS SENTIMENTOS.</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>O que qualifica sua adoração como autêntica são os seus sentimentos. O que qualifica sua adoração como fidedigna, é a verdade de Deus.<br/>
          <span className="italic block mt-1 text-gray-700 dark:text-gray-300">Para você, um idólatra pode adorar em espírito (de coração) o seu ídolo?</span></li>
          <li>Assim como podemos adorar o Deus verdadeiro, mas não de verdade. Podemos adorar de verdade, mas não o Deus verdadeiro.</li>
          <li>Enquanto adorar em espírito é adorar com as emoções e sentimentos, adorar em verdade é adorar com o que a mente recebeu da verdade.</li>
          <li>Geralmente, não conseguimos ter sentimentos sem pensar sobre aquilo que gera a emoção. Isso significa que, em relação a Deus, precisamos ter sentimentos com base em uma verdade sólida.</li>
          <li>Os sentimentos dizem: “Eu estou sendo sincero no que estou fazendo.” E a verdade diz: “Eu estou correto em meus sentimentos”.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2">Como isso alinha todo o meu ser em relação a adoração?</p>
          <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">O FRUTO DO SEU ENCANTAMENTO COM DEUS É QUE É ADORAÇÃO.</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Adoração não é fazer ou dar algo a Deus. É a alegria ao fazer qualquer coisa por Ele. Deus recebe glória quando Sua glória faz você responder com estas coisas.</li>
          <li>Se alguém lhe pergunta: “Por que você faz estas coisas?”<br/>
              <span className="text-red-600 block mt-1">ERRADO: “para que Deus receba glória”</span>
              <span className="text-green-600 font-medium block">CERTO: “sinto-me alegre por causa da glória de Deus.”</span>
          </li>
          <li>Você nunca dá nada a Deus. Apenas devolve alegremente o valor da Sua glória. Se você canta, dança, ora ou serve por dever, não vem do desejo e sim do dever. Não é adoração com espírito. Pode ser com a vontade, com o corpo, mas não é com o espírito; não é com a alma; não é com o coração, e, portanto, não é adoração.</li>
        </ul>

        <p className="mb-4 font-bold text-center text-rose-700 dark:text-rose-400">Adoração É Tudo Aquilo Que Você Faz Por Causa Da Sua Alegria No Valor De Deus.</p>

        <ul className="list-decimal pl-5 space-y-3 mb-8" start={4}>
          <li>Emoção que não vem de Deus não é pecado. Mas também não é adoração. Isso significa que você pode cantar, dançar e celebrar com emoção no louvor, sem que estas emoções fluam de Deus. Você pode se emocionar com uma mensagem ou uma peça teatral, e estas emoções não serem santas, pois no momento, não são emoções que fluem de Deus e sim de algum outro objeto. Ou seja, sua “adoração” não flui da verdade.</li>
        </ul>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• Como essa compreensão pode afetar positivamente os louvores na congregação?</p>
              <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
            </div>
            <div>
              <p className="mb-2 font-medium">• Como essa compreensão pode afetar positivamente a escolha das letras das canções?</p>
              <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
            </div>
            <div>
              <p className="mb-2 font-medium">• Como essa compreensão pode afetar positivamente a programação da liturgia?</p>
              <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
            </div>
          </div>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">A SINCERIDADE DAS EMOÇÕES PODE SER GENUÍNA, MAS ERRADA.</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Isso significa que na sua adoração você pode estar 100% sincero e 100% errado.</li>
          <li>Mas não deve escolher entre ser sincero e ser correto na adoração. As duas coisas precisam estar presentes, pois verdadeira adoração deve ser em espírito e em verdade.</li>
          <li>Você deve orar: “Senhor me dê a alegria da sua glória para que eu possa te adorar em espírito”.</li>
          <li>Adoração em Verdade significa de acordo com a verdade. E estas verdades devem gerar genuínas afeições. Como diz John Piper: “As únicas afeições que honram a Deus são aquelas que estão enraizados na rocha da verdade”.</li>
        </ul>

        <VerseQuote text="Irmãos, o desejo do meu coração e a minha oração a Deus pelos israelitas é que eles sejam salvos. Pois posso testemunhar que eles têm zelo por Deus, mas o seu zelo não se baseia no conhecimento. Porquanto, ignorando a justiça que vem de Deus e procurando estabelecer a sua própria, não se submeteram à justiça de Deus." refText="(Rm.10.1-3)" />

        <ul className="list-decimal pl-5 space-y-3 mb-8" start={5}>
          <li>Paulo nesta passagem, afirma com segurança que a devoção dos seus compatriotas em relação a Deus era da mais sincera que conhecia. Porém, a falta de entendimento do evangelho invalidava completamente a sinceridade daquela devoção. Segundo Paulo, eles estavam “sinceramente” perdidos.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2">Como esta verdade toca em você?</p>
          <textarea className="w-full h-24 border border-rose-200 dark:border-zinc-700 mt-2 p-3 rounded-lg bg-white/80 dark:bg-zinc-900/80 text-gray-800 dark:text-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/50 transition shadow-sm text-[0.95rem] font-sans placeholder:text-[#a1a1aa] dark:placeholder:text-[#52525b]" placeholder="Escreva sua reflexão aqui..."></textarea>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">INTENSIDADE SEM VERDADE NÃO É ADORAÇÃO VERDADEIRA.</h3>
        <ul className="list-decimal pl-5 space-y-3 mb-6">
          <li>Há muitos crentes que gostam de falar em adoração extravagante. A bíblia só fala de dois tipos. A falsa e a verdadeira adoração. Isso não significa que os sentimentos devem estar ausentes. Porém, entenda isso: <strong className="text-rose-700 dark:text-rose-400">O calor precisa vir da luz!</strong></li>
          <li>Deve haver calor no coração e luz na mente. O fervor da verdade e não dos sentimentos pessoais.</li>
          <li>Pentecostais atacam a teologia como a reflexão que seca o sem fervor. Os tradicionais atacam o fervor como o perigo de emoções vazias. Os dois erraram em Jo.4.24, privando a igreja de crescer na adoração, pois a verdadeira adoração advém de pensamento profundo que gera sentimento profundo e santo.</li>
        </ul>

        <p className="mb-6 font-bold text-lg text-center text-rose-700 dark:text-rose-400">Sentimentos fortes por Deus, arraigados e moldados pela verdade. Isso é o que precisamos ter!</p>

        <p className="mb-8 italic text-lg px-4 border-l-4 border-rose-200">Jonathan Edwards disse que: “os únicos sentimentos que engrandecem o valor de Deus são os que vêm da compreensão genuína da sua glória.”</p>

        <ActionBox title="O EVANGELHO SANTIFICA A MENTE">
          <p className="text-sm font-medium mb-4">Só A Verdade Da Graça Gera Em Nossa Alma Gozo Necessário Para A Glória De Deus. O Evangelho Santifica Nossos Sentimentos.</p>
          <VerseQuote text="Pois nós é que somos a circuncisão, nós que adoramos pelo Espírito de Deus, que nos gloriamos em Cristo Jesus e não temos confiança alguma na carne" refText="(Fp.3.3)" />
        </ActionBox>

      </>
    )
  }
];
