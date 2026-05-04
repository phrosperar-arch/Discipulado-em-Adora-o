import React from 'react';
import { VerseQuote } from '../components/ui/VerseQuote';
import { ReflectionInput } from '../components/ui/ReflectionInput';
import { HighlightBox } from '../components/ui/HighlightBox';
import { ActionBox } from '../components/ui/ActionBox';
import { Chapter } from './bookData';

export const bookData: Chapter[] = [
  {
    id: 5,
    title: "5. Adoração: Resposta ao Amor de Deus",
    content: (
      <>
        <HighlightBox title="PERGUNTAS INTRODUTÓRIAS">
          <ul className="list-disc pl-5 space-y-2">
            <li>Será que existe adoração extravagante?</li>
            <li>Quem começa a agir? O homem ou Deus?</li>
            <li>Quem chama a atenção de quem?</li>
          </ul>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">A AÇÃO DIVINA GERA ADORAÇÃO</h3>
        
        <ul className="list-decimal pl-5 space-y-6 mb-8 mt-6">
          <li>
            <p className="mb-2">Nós cremos para que Deus pudesse nos amar ou Deus nos amou primeiro para que pudéssemos crer?</p>
            <VerseQuote text="Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna." refText="(João 3:16)" />
            <p className="mt-2 text-sm italic">Sem o amor de Deus não creríamos. É o amor de Deus que nos leva a crer ou reagir com fé.</p>
          </li>
          
          <li>
            <p className="mb-2">Nós amamos a Deus para que Ele pudesse nos perdoar ou Deus nos perdoou (muito) para que pudéssemos amá-lo?</p>
            <VerseQuote text="Por isso, te digo: perdoados lhe são os seus muitos pecados, porque ela muito amou; mas aquele a quem pouco se perdoa, pouco ama." refText="(Lucas 7:47)" />
          </li>

          <li>
            <p className="mb-2">Nós escolhemos a Cristo e damos os frutos para que Deus nos escolhesse ou Deus nos escolheu para que pudéssemos escolhê-lo e reagíssemos dando frutos?</p>
            <VerseQuote text="Não fostes vós que me escolhestes a mim; pelo contrário, eu vos escolhi a vós outros e vos designei para que vades e deis fruto, e o vosso fruto permaneça; a fim de que tudo quanto pedirdes ao Pai em meu nome, ele vo-lo conceda." refText="(João 15:16)" />
          </li>

          <li>
            <p className="mb-2">Nós nos quebrantamos para que Deus pudesse revelar seu amor ou Cristo nos revela seu amor e nós somos constrangidos?</p>
            <VerseQuote text="Pois o amor de Cristo nos constrange, julgando nós isto: um morreu por todos; logo, todos morreram." refText="(2 Coríntios 5:14)" />
          </li>

          <li>
            <p className="mb-2">Nós vivemos uma vida de devoção a Deus pra Cristo morrer por nós ou Cristo morreu por nós para que pudéssemos viver para Ele?</p>
            <VerseQuote text="E ele morreu por todos, para que os que vivem não vivam mais para si mesmos, mas para aquele que por eles morreu e ressuscitou." refText="(2 Coríntios 5:15)" />
          </li>

          <li>
            <p className="mb-2">É sempre Deus quem age. E nós simplesmente reagimos. Ele toma iniciativa e nós respondemos. Deus nos ama e somente assim nós conseguimos amá-lo. Deus revela sua glória a nós e nós ADORAMOS!</p>
            <VerseQuote text="Nisto consiste o amor: não em que nós tenhamos amado a Deus, mas em que ele nos amou e enviou o seu Filho como propiciação pelos nossos pecados." refText="(1 João 4:10)" />
          </li>

          <li>
            <p className="font-bold text-rose-700 dark:text-rose-400">Não é o que fazemos pra Deus que traduz o amor. É o que Deus fez por nós!</p>
          </li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• O que isso muda na forma de ver e viver a adoração?</p>
              <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="O que isso muda na forma de ver e viver a adoração?" id="p2_txt_q_9" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Qual deve ser nossa atitude?</p>
              <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="Qual deve ser nossa atitude?" id="p2_txt_q_10" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">OS CÉUS SÃO A REAÇÃO À GLÓRIA DE DEUS</h3>
        <p className="mb-8 font-bold text-lg text-center text-rose-700 dark:text-rose-400">Adoração não é Deus encantando com você. É você encantado com a Glória de Deus!</p>

        <HighlightBox title="PERGUNTA SALIENTE">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• O que isso muda no culto?</p>
              <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="O que isso muda no culto?" id="p2_txt_q_11" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• O que isso muda no louvor que cantamos?</p>
              <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="O que isso muda no louvor que cantamos?" id="p2_txt_q_12" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <ul className="list-decimal pl-5 space-y-4 mb-6 mt-8">
          <li>A Adoração que Deus exige é aquela que reflete de volta para Ele a glória em amor que ele deu a nós. Deus não se impressiona com a glória de ninguém senão a dele mesmo, pois não há glória maior nem mais encantadora!</li>
          <li>Por que os anjos não se cansam de adorar a Deus nos céus? Você acha que eles foram programados para louvar e adorar mecanicamente a Deus? Acha que eles são os seres infelizes que fazem algo maçante o tempo todo?</li>
          <li>É de alegria que eles cantam! Eles não se cansam de se encantar com aquilo que vêem noite e dia – <strong className="text-rose-700 dark:text-rose-400">A BELEZA DA GLÓRIA DE DEUS EM CRISTO!</strong> Toda vez que Jesus entra em cena, os anjos irrompem em adoração tomados de encantamento! Quando Jesus nasceu numa humilde manjedoura, os anjos explodiram os céus de alegria! Imagine como eles se sentem ao poder contemplar Jesus Cristo cheio de Glória a destra de Deus!</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2 font-medium">O que Deus espera de nós então?</p>
          <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="O que Deus espera de nós então?" id="p2_txt_q_13" placeholder="Escreva sua reflexão aqui..." />
        </HighlightBox>

        <ul className="list-decimal pl-5 space-y-4 mb-6 mt-8">
          <li>Só existe adoração após contemplarmos a glória de Deus em Cristo. Não há nada a fazer na adoração antes disso. Se assim você o fizer, estará tentando chamar a atenção de Deus enquanto Ele está tentando chamar a sua.</li>
          <li>Você deve retirar toda atenção de você e das coisas, e concentrar-se somente Nele. Pensando firmemente Nele, em quem Ele é e no que Ele fez por você em Cristo.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2 font-medium">O que isso muda ao ministrar o louvor na congregação?</p>
          <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="O que isso muda ao ministrar o louvor na congregação?" id="p2_txt_q_14" placeholder="Escreva sua reflexão aqui..." />
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">ADORAR PARA TENTAR IMPRESSIONAR A DEUS É ERRADO.</h3>
        
        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2 font-medium">Em geral, qual é a intenção objetiva e imediata de um ministro de louvor e do ministério?</p>
          <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="Em geral, qual é a intenção objetiva e imediata de um ministro de louvor e do ministério?" id="p2_txt_q_15" placeholder="Escreva sua reflexão aqui..." />
        </HighlightBox>

        <ul className="list-decimal pl-5 space-y-4 mb-6 mt-8">
          <li>
            Algo Assim Estava Acontecendo Nos Tempos De Isaías. Veja A Resposta De Deus.<br/>
            <VerseQuote text='“Para que me oferecem tantos sacrifícios?”, pergunta o SENHOR. “Para mim, chega de holocaustos de carneiros e da gordura de novilhos gordos. Não tenho nenhum prazer no sangue de novilhos, de cordeiros e de bodes! Quando vocês vêm à minha presença, quem lhes pediu que pusessem os pés em meus átrios? Parem de trazer ofertas inúteis! O incenso de vocês é repugnante para mim. Luas novas, sábados e reuniões! Não consigo suportar seus encontros cheios de iniquidade."' refText="(Is.1.11-13)" />
          </li>
          <li>A adoração é uma expressão de relacionamento de amor. Este amor, da nossa parte, não precisa ser perfeito (nunca será), mas precisa ser real. Se não tiver relacionamento de amor ou se não for real, não importa o que se faça ou obedeça, é repugnado por Deus. Nosso coração caído não tem capacidade de amar a Deus por si mesmo.</li>
          <li>É isso que 1Jo.4.19 está ensinando. Sem o amor de Deus, nem em um milhão de anos, nosso coração poderia amá-lo. Deus, escolhe receber nosso amor, nos amando primeiro. Na verdade, nosso coração o rejeita e foge Dele. Para que possamos amá-lo e adorá-lo, primeiro Deus precisa revelar ao nosso coração a Glória do seu amor.</li>
        </ul>

        <ActionBox title="ALINHAMENTO">
          <ul className="list-none space-y-6 font-medium">
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Do que acha que deve se arrepender?</span>
              <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="Do que acha que deve se arrepender?" id="p2_div_q_1" placeholder="Escreva sua reflexão aqui..." />
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• O que sente que deve pedir a Deus agora?</span>
              <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="O que sente que deve pedir a Deus agora?" id="p2_div_q_2" placeholder="Escreva sua reflexão aqui..." />
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Como acredita que Cristo e sua obra te ajuda nisso?</span>
              <ReflectionInput chapterTitle="5. Adoração: Resposta ao Amor de Deus" question="Como acredita que Cristo e sua obra te ajuda nisso?" id="p2_div_q_3" placeholder="Escreva sua reflexão aqui..." />
            </li>
          </ul>
        </ActionBox>
      </>
    )
  },
  {
    id: 6,
    title: "6. O Caminho da Adoração",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">RECAPITULANDO...</h3>
        <VerseQuote text="Nós amamos porque ele nos amou primeiro." refText="1 João 4:19" />
        <p className="mb-6 font-bold text-lg text-center text-rose-700 dark:text-rose-400 uppercase">É O Amor De Deus Por Nós Que Gera Em Nosso Coração Amor Por Ele. Este Amor Reagente É Que É Adoração.</p>
        <p className="mb-8 font-medium">O texto de 1Jo.4.19 nos ensina outra grande verdade...</p>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">I. O NOSSO AMOR POR DEUS PODE CRESCER À MEDIDA QUE NOSSA PERCEPÇÃO DO SEU AMOR POR NÓS TAMBÉM CRESCE.</h3>
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>É quando nosso coração percebe espiritualmente que é amado por Deus, que passa então a produzir afetos por Ele. E como o amor de Deus é infinito, quanto mais tivermos a percepção do Seu amor por nós, tanto mais nosso próprio coração O amará.</li>
          <li>É como um motor que recebe combustível para só então produzir energia. Ou como uma lâmpada que só irradia luz se a energia elétrica passar por ela. Ou como a lua que só reflete luz e calor porque recebe do sol. Assim é o nosso coração para com Deus. <span className="font-bold italic">“Nós amamos porque ele nos amou primeiro.”</span></li>
          <li>Isso é maravilhoso, pois como o amor de Deus é infinito, não há limites para o aumento do nosso amor por Ele, desde que nosso coração se entregue a percepção deste amor.</li>
          <li>Nós erramos quando nos centramos em nós mesmos e não em Deus para crescermos em nosso amor por Ele.</li>
        </ul>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• Você ama cada vez mais alguém se concentrando em você ou na pessoa amada?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="Você ama cada vez mais alguém se concentrando em você ou na pessoa amada?" id="p2_txt_q_16" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Você deve se concentrar nas coisas que você faz pra Deus que revelam suas qualidades? Ou nas coisas que Deus fez que revelam as qualidades dele?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="Você deve se concentrar nas coisas que você faz pra Deus que revelam suas qualidades? Ou nas coisas que Deus fez que revelam as qualidades dele?" id="p2_txt_q_17" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <ul className="list-decimal pl-5 space-y-4 mb-6 mt-8">
          <li>É olhando e focando nele que nossa paixão inicia e aumenta cada vez mais à medida que o observamos. Qualquer coisa que você faz para Deus, como expressão resultante do amor que está sentindo por Ele é adoração. E qualquer coisa que você faça, por mais sagrado que seja, que não advenha dos afetos que naquele momento sua alma sente por Deus, é falsa adoração.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2 font-medium">Mas como você vai pensar em alguém da qual sabe tão pouco? Como vai pensar tanto em alguém que ainda lhe é tão estranho?</p>
          <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="Mas como você vai pensar em alguém da qual sabe tão pouco? Como vai pensar tanto em alguém que ainda lhe é tão estranho?" id="p2_txt_q_18" placeholder="Escreva sua reflexão aqui..." />
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">VOCÊ PRECISA SE APROFUNDAR NO EVANGELHO!</h3>
        <p className="mb-6 font-medium italic text-lg text-center">Mergulhar nas Escrituras. Ouvir e entender a graça de Deus.</p>
        
        <p className="mb-2 text-rose-700 dark:text-rose-400 font-bold uppercase text-sm tracking-wider">Veja o que diz Paulo aos Colossenses 1.3-6:</p>
        <VerseQuote text="Sempre agradecemos a Deus, o Pai de nosso Senhor Jesus Cristo, quando oramos por vocês, pois temos ouvido falar da fé que vocês têm em Cristo Jesus e do amor que têm por todos os santos, por causa da esperança que lhes está reservada nos céus, a respeito da qual vocês ouviram por meio da palavra da verdade, o evangelho que chegou até vocês. Por todo o mundo este evangelho vai frutificando e crescendo, como também ocorre entre vocês, desde o dia em que o ouviram e entenderam a graça de Deus em toda a sua verdade." refText="" />

        <HighlightBox title="PERGUNTAS DE ESTUDO">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">1. Pelo que Paulo agradece a respeito desses irmãos?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="Pelo que Paulo agradece a respeito desses irmãos?" id="p2_txt_q_19" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">2. O que causava a frutificação e crescimento na fé em Cristo, amor entre esses irmãos?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="O que causava a frutificação e crescimento na fé em Cristo, amor entre esses irmãos?" id="p2_txt_q_20" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">3. O que foi que eles ouviram e entenderam?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="O que foi que eles ouviram e entenderam?" id="p2_txt_q_21" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <ul className="list-decimal pl-5 space-y-4 mb-8 mt-8">
          <li>Ele diz que a fé e o amor no coração destes irmãos passaram a ser produzidos desde o dia em que ouviram e entenderam a graça de Deus em toda verdade. É ouvir e entender a graça de Deus em toda a verdade o segredo para que nosso coração reaja com amor a Deus.</li>
          <li>Nosso coração está morto. Sofreu uma parada cardíaca espiritual por causa do pecado. Precisamos receber os choques desfibrilantes do amor de Deus para que nosso coração comece a dar resposta de vida. E a resposta de vida é amar a Deus.</li>
        </ul>

        <VerseQuote text="Eu lhes darei um coração capaz de conhecer-me e de saber que eu sou o SENHOR. Serão o meu povo, e eu serei o seu Deus, pois eles se voltarão para mim de todo o coração." refText="(Jr 24.7)" />
        <VerseQuote text="Cria em mim um coração puro, ó Deus, e renova dentro de mim um espírito estável." refText="(Sl 51.10)" />
        <VerseQuote text="Darei a eles um coração não dividido e porei um novo espírito dentro deles; retirarei deles o coração de pedra e lhes darei um coração de carne. Então agirão segundo os meus decretos e serão cuidadosos em obedecer às minhas leis. Eles serão o meu povo, e eu serei o seu Deus." refText="(Ez 11.19,20)" />

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6 pt-4">
            <div>
              <p className="mb-2 font-medium">• Você pode fazer forças para achar algo belo?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="Você pode fazer forças para achar algo belo?" id="p2_txt_q_22" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Se você não enxerga o que é belo, terá algum encantamento?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="Se você não enxerga o que é belo, terá algum encantamento?" id="p2_txt_q_23" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• É possível achar algo belo e se encantar com ele sem atentar para ele?</p>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="É possível achar algo belo e se encantar com ele sem atentar para ele?" id="p2_txt_q_24" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">ADORAÇÃO NÃO É CHAMAR A ATENÇÃO DE DEUS E SIM OUVIR O GRITO DO ESPÍRITO</h3>
        <VerseQuote text="Ainda que eu fale as línguas dos homens e dos anjos, se não tiver amor, serei como o sino que ressoa ou como o prato que retine." refText="(1Co 13.1)" />
        
        <h4 className="text-[1.05rem] font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">NÃO ESTAMOS SENDO PAGÃOS?</h4>
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>Os estudiosos dizem que Paulo está fazendo aqui uma referência aos cultos pagãos conhecidos na cidade de Corintos. Os corintos, influenciados pela cultura pagã, acreditavam que suas práticas cultuais atrairia o favor dos deuses fazendo todo barulho possível como sino que ressoa ou como o prato que retine. Assim se lançavam em sacrifícios, suor, gritos e até autoflagelação. O mesmo, fazem os crentes na adoração quando não entendem o evangelho.</li>
          <li>Mas quando digo que adoração é nossa resposta ao amor de Deus, o que muda aqui? Não é Deus que responde com amor a nossa adoração “extravagante”. Nós é que respondemos com adoração ao amor extravagante de Deus.<br/>
          <span className="italic block mt-4 text-rose-700 dark:text-rose-400 font-bold border-l-4 border-rose-200 pl-4 py-1.5 bg-rose-50/50 dark:bg-rose-900/10">O Espírito Santo tem como papel aqui na terra glorificar o Filho.</span></li>
        </ul>

        <VerseQuote text="Quando vier o Conselheiro, que eu enviarei a vocês da parte do Pai, o Espírito da verdade que provém do Pai, ele testemunhará a meu respeito." refText="(João 14:26)" />
        <VerseQuote text="Mas quando o Espírito da verdade vier, ele os guiará a toda a verdade. Não falará de si mesmo; falará apenas o que ouvir, e lhes anunciará o que está por vir. Ele me glorificará, porque receberá do que é meu e o tornará conhecido a vocês. Tudo o que pertence ao Pai é meu. Por isso eu disse que o Espírito receberá do que é meu e o tornará conhecido a vocês." refText="(João 16:13-15)" />

        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>Tudo que Ele faz é direcionar a atenção dos homens para o Filho. Ele grita em nossa alma para prestarmos atenção ao Filho e sua beleza. Ele quer que nos encantemos com o Filho como todos os anjos o fazem. Como Ele e o Pai se encantam, Ele quer que tenhamos a mesma alegria.</li>
          <li>Entender que adoração é chamar atenção de Deus é dizer a Ele que há em nós algo mais digno de ser admirado do que há no Filho. Ora, isso é um absurdo!</li>
          <li>É como se disséssemos: “Deus! Olhe para mim! Não olhe para o Filho. Não se impressione com o Filho. Venha. Vamos nos impressionar com a minha glória!”</li>
          <li>Mas o Espírito grita:<br/>
              <span className="font-bold block text-rose-700 dark:text-rose-400 text-[1.1rem] mt-3 leading-relaxed">“NÃO!!! Você está perdendo o banquete de Deus! Deleite-se no Filho e o Pai se alegrará de ti. Ama infinitamente o Filho mais que tudo e o Pai o amará. Glorifique o filho e a glória do Pai te envolverá!”</span>
          </li>
        </ul>

        <ActionBox title="ALINHAMENTO">
          <ul className="list-none space-y-6 font-medium">
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Do que acha que deve se arrepender?</span>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="Do que acha que deve se arrepender?" id="p2_div_q_4" placeholder="Escreva sua reflexão aqui..." />
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• O que sente que deve pedir a Deus agora?</span>
              <ReflectionInput chapterTitle="6. O Caminho da Adoração" question="O que sente que deve pedir a Deus agora?" id="p2_div_q_5" placeholder="Escreva sua reflexão aqui..." />
            </li>
          </ul>
        </ActionBox>
      </>
    )
  },
  {
    id: 7,
    title: "7. A Adoração e a Oração",
    content: (
      <>
        <VerseQuote text="1 De onde vêm as guerras e contendas que há entre vocês? Não vêm das paixões que guerreiam dentro de vocês? 2 Vocês cobiçam coisas, e não as têm; matam e invejam, mas não conseguem obter o que desejam. Vocês vivem a lutar e a fazer guerras. Não têm, porque não pedem. 3 Quando pedem, não recebem, pois pedem por motivos errados, para gastar em seus prazeres. 4 Adúlteros, vocês não sabem que a amizade com o mundo é inimizade com Deus? Quem quer ser amigo do mundo faz-se inimigo de Deus. 5 Ou vocês acham que é sem razão que a Escritura diz que o Espírito que ele fez habitar em nós tem fortes ciúmes? 6 Mas ele nos concede graça maior. Por isso diz a Escritura: “Deus se opõe aos orgulhosos, mas concede graça aos humildes”. 7 Portanto, submetam-se a Deus. Resistam ao Diabo, e ele fugirá de vocês. 8 Aproximem-se de Deus, e ele se aproximará de vocês! Pecadores, limpem as mãos, e vocês, que têm a mente dividida, purifiquem o coração. 9 Entristeçam-se, lamentem-se e chorem. Troquem o riso por lamento e a alegria por tristeza. 10 Humilhem-se diante do Senhor, e ele os exaltará." refText="(Tg.4.1-10)" />

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">INTRODUÇÃO</h3>
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>Qual é a relação entre submissão e adoração? Deveria ser lógica a resposta, mas não havia parado para pensar nela.</li>
          <li>Adoração tem a ver com entrega, espontaneidade, encanto, reação, sacrifício. Mas submissão?</li>
          <li>Mas adoração abrange tantas coisas que seria lógico concluir que submissão também faça parte dela. Mas não devemos concluir isso com base na lógica. Precisamos entender isso baseado nas Escrituras. E como as Escrituras aqui em Tiago nos faz entender esta relação? Entenderemos esta relação se notarmos a alusão que Tiago faz aqui sobre o matrimônio.<br/>
          <span className="italic block mt-1">Como ele faz isso?</span></li>
        </ul>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">ELE NOS CHAMA DE ADÚLTEROS</h3>
        <VerseQuote text="Adúlteros, vocês não sabem que a amizade com o mundo é inimizade com Deus? Quem quer ser amigo do mundo faz-se inimigo de Deus." refText="(v.4)" />
        
        <ul className="list-decimal pl-5 space-y-4 mb-6">
          <li>Só casados adulteram. Solteiros fornicam ou se prostituem. Portanto Tiago está nos lembrando: Vocês têm marido! E mais. Ele é ciumento (5). Vocês já têm compromisso eterno com Ele. Mas vocês estão em adultério! Como assim?<br/>
          <span className="italic block mt-1">Este pecado na adoração alcança os relativistas liberais.</span></li>
          <li>São pessoas que mantêm relação com Deus, mas também mantêm relação com o mundo (4). E elas não percebem o problema nisso. “Vocês não sabem!?” Para eles está tudo bem. Para o nosso Noivo não! Isso é adultério.</li>
        </ul>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• Baseado no que vemos aqui, como podemos exemplificar uma forma de adultério na adoração?</p>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Baseado no que vemos aqui, como podemos exemplificar uma forma de adultério na adoração?" id="p2_txt_q_25" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Você já se pegou ou se encontra nesta situação?</p>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Você já se pegou ou se encontra nesta situação?" id="p2_txt_q_26" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <p className="mb-4 mt-8 font-medium">Aqui já começamos a perceber a presença de um matrimônio. Mas como estamos em adultério?</p>

        <h3 className="text-xl font-bold mb-4 mt-6 text-rose-700 dark:text-rose-400 uppercase">TEMOS AGIDO COMO UMA PROSTITUTA E NÃO COMO UMA ESPOSA!</h3>
        <ul className="list-decimal pl-5 space-y-4 mb-6">
          <li>Como nos prostituímos? Usando Deus para encontrar prazeres em outros amantes (3)</li>
          <li>A oração é uma das formas de adoração mais sublimes. Mas Deus nos deu a oração para sentirmos prazer nEle.</li>
          <li>Mas quando usamos a oração apenas para nos satisfazermos no que pedimos, ao invés de nos satisfazermos em Deus, nos prostituímos.</li>
          <li>Quando agimos assim, estamos cometendo prostituição por meio da oração. Como uma mulher que usa os recursos do marido, porém para ter prazer com outros que não ele.</li>
        </ul>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• Você se identifica com esta realidade?</p>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Você se identifica com esta realidade?" id="p2_txt_q_27" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Percebeu isso agora ou já havia percebido?</p>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Percebeu isso agora ou já havia percebido?" id="p2_txt_q_28" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Se já percebeu a algum tempo, mudou depois que se enxergou? Se não, sabe por que não?</p>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Se já percebeu a algum tempo, mudou depois que se enxergou? Se não, sabe por que não?" id="p2_txt_q_29" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <ul className="list-decimal pl-5 space-y-4 mb-8 mt-8">
          <li>A oração, que é uma forma de adoração, nos foi dada para nos alegrarmos em Deus.</li>
          <li>Enquanto o adultério espiritual (relação com Deus e com o mundo) é uma denúncia ao relativismo liberal, a oração que não busca alegrar-se em Deus denuncia o moralista religioso.</li>
          <li>Quando ansiamos pela oração, aquilo que Jesus pode nos dar mais do que ele mesmo, estamos nos prostituindo ao adorarmos.</li>
          <li>Que alusão mais Tiago faz aqui para percebermos a relação entre submissão e adoração?</li>
        </ul>

        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">O SENHOR TEM CIÚMES DE NÓS.</h3>
        <VerseQuote text="Ou vocês acham que é sem razão que a Escritura diz que o Espírito que ele fez habitar em nós tem fortes ciúmes?" refText="(v.5)" />
        
        <ul className="list-decimal pl-5 space-y-4 mb-6">
          <li>Isso é tão maravilhoso que é difícil de acreditar. Você não é mais um no mundo para Deus. Você pertence a um esposo ciumento. Mas qual o sentido disso aqui?</li>
          <li>A palavra ciúmes (5) tem o mesmo significado de paixão (1). Hedone = Desejo ardente. Deus está dizendo aqui: Vocês têm desejos ardentes por coisas que não vos preenche e vos desprezam (2). Mas ignoram o Senhor, que te preenche e te completa e que tem um desejo ardente por vocês! Há duas coisas que Deus não divide com ninguém. Sua Glória, e você!</li>
        </ul>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• Como você sente ao saber disso?</p>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Como você sente ao saber disso?" id="p2_txt_q_30" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• O que sente vontade de fazer?</p>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="O que sente vontade de fazer?" id="p2_txt_q_31" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">ADULTÉRIO E PROSTITUIÇÃO NÃO NOS TRAZEM PAZ. NOS DEIXA SEMPRE EM GUERRA.</h3>
        <VerseQuote text='“De onde vêm as guerras e contendas que há entre vocês? Não vêm das paixões que guerreiam dentro de vocês? Vocês cobiçam coisas, e não as têm; matam e invejam, mas não conseguem obter o que desejam. Vocês vivem a lutar e a fazer guerras.”' refText="(v.1,2)" />
        
        <p className="mb-4 font-medium uppercase text-rose-700 dark:text-rose-400">Tiago mostra duas verdades aqui:</p>
        <p className="mb-4 font-bold">Primeiro, lutamos, fazemos guerras e nos matamos ansiando coisas, ao invés de Deus.</p>
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>Elas nos matam de três formas: (a) Com ansiedade antes de obtermos. (b) Com preocupação para manter quando obtemos. (c) Com desespero com a possibilidade de perdermos.</li>
          <li>Estas paixões dentro de nós é que geram guerras e contendas entre nós (1,2).</li>
          <li>Oramos a Deus pedindo: Deus me dê coisas! Preciso de coisas! Quando devemos aprender a pedir: Deus, me dê Deus! Preciso de Deus!</li>
        </ul>

        <ActionBox title="ALINHAMENTO">
          <ul className="list-none space-y-6 font-medium">
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Do que acha que deve se arrepender?</span>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Do que acha que deve se arrepender?" id="p2_div_q_6" placeholder="Escreva sua reflexão aqui..." />
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• O que sente que deve pedir a Deus agora?</span>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="O que sente que deve pedir a Deus agora?" id="p2_div_q_7" placeholder="Escreva sua reflexão aqui..." />
            </li>
            <li>
              <span className="block text-rose-700 dark:text-rose-400 font-bold mb-1">• Como acredita que Cristo e sua obra te ajuda nisso?</span>
              <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="Como acredita que Cristo e sua obra te ajuda nisso?" id="p2_div_q_8" placeholder="Escreva sua reflexão aqui..." />
            </li>
          </ul>
        </ActionBox>

        <p className="mb-4 mt-8 font-bold">Não temos porque não pedimos Deus mesmo.</p>
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>O que queremos em nossas orações com aquilo que Deus nos dá? Exemplo: Dinheiro, profissão, família, saúde, respeito. Etc.</li>
          <li>Deus pode nos dar tudo o que queremos com estas coisas, sem precisar nos dar estas coisas, pois tudo o que realmente precisamos, se encontra nEle mesmo. E a guerra interior cessa quando nos satisfazemos em Deus. E quando a guerra interior cessa, as guerras exteriores também cessam e podemos ter paz em nossas relações.</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2 font-medium">O que Deus está falando com você aqui?</p>
          <ReflectionInput chapterTitle="7. A Adoração e a Oração" question="O que Deus está falando com você aqui?" id="p2_txt_q_32" placeholder="Escreva sua reflexão aqui..." />
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">RESUMINDO...</h3>
        <ul className="list-decimal pl-5 space-y-4 mb-4 font-medium">
          <li>Flertar com os prazeres deste mundo nos coloca como adúlteros. (4) <span className="text-sm text-gray-500 font-normal">Pecados relativistas.</span></li>
          <li>Usar a oração para se alegrar nas coisas que pedimos mais do que em Deus, equivale a prostituição na adoração. (3) <span className="text-sm text-gray-500 font-normal">Pecados moralistas.</span></li>
          <li>Para nos trazer de volta arrependidos, as Escrituras nos lembram que temos um esposo ciumento ardendo de amor por nós. (5)</li>
          <li>A guerra só cessa quando nos satisfazemos em Deus (1,2).</li>
        </ul>
      </>
    )
  },
  {
    id: 8,
    title: "8. Vivendo Como Filhos de Deus",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4 mt-8 text-rose-700 dark:text-rose-400 uppercase">INTRODUÇÃO</h3>
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>Em Tiago, fomos chamados a sermos uma esposa fiel e encantada com o noivo. Em Gálatas somos chamados a vivermos como filhos amados de Deus.</li>
          <li>Segundo Paulo (Gl.4.1-5), é possível vivermos como escravos mesmo sendo filhos de Deus. É possível passar uma vida cristã inteira de dedicação, sem usufruirmos do amor de Deus como Pai, mesmo o chamando assim.</li>
          <li>Agora, a partir dos versos 6 – 9, vemos que àquele para quem o evangelho chegou, não só na cabeça, mas no coração, a relação com Deus é outra.</li>
        </ul>

        <VerseQuote text="E, porque vocês são filhos, Deus enviou o Espírito de seu Filho aos seus corações, o qual clama: 'Aba, Pai'. Assim, você já não é mais escravo, mas filho; e, por ser filho, Deus também o tornou herdeiro. Antes, quando vocês não conheciam a Deus, eram escravos daqueles que, por natureza, não são deuses. Mas agora, conhecendo a Deus, ou melhor, sendo por ele conhecidos, como é que estão voltando àqueles mesmos princípios elementares, fracos e sem poder? Querem ser escravizados por eles outra vez?" refText="Gálatas 4.6-9" />

        <ul className="list-decimal pl-5 space-y-4 mb-6 mt-8">
          <li>Mas perceba no verso 9 que é possível vivermos um retrocesso nisso, tão logo após experimentarmos Deus como Pai. Os gálatas retrocederam tão rápido que Paulo ficou espantado. (Gl.1.6)<br/>
          <span className="italic block mt-1">“Admiro-me de que vocês estejam abandonando tão rapidamente aquele que os chamou pela graça de Cristo, para seguirem outro evangelho”</span></li>
          <li>Olha a pergunta dele no início do verso 15:<br/>
          <span className="italic block mt-1">“Que aconteceu com a alegria de vocês?”</span></li>
          <li>E olhe o que ele diz no verso 20:<br/>
          <span className="italic block mt-1">“Eu gostaria de estar com vocês agora e mudar o meu tom de voz, pois estou perplexo quanto a vocês.”</span></li>
          <li>Mas Paulo não está espantado apenas porque foi um retrocesso muito rápido, mas sim porque eles não se perceberam retrocedendo. E foi o que mais me espantou quando estudei a respeito.</li>
          <li>Nós não nos damos conta que estamos perdendo a relação com Pai. Só percebemos, quando pela graça, nos vemos já distantes dEle. Do que precisamos para nos reaproximar do Pai?</li>
        </ul>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">PRECISAMOS QUE CRISTO SEJA NOVAMENTE GERADO EM NOSSOS CORAÇÕES.</h3>
        <VerseQuote text="Meus filhos, novamente estou sofrendo dores de parto por sua causa, até que Cristo seja formado em vocês." refText="(v.19)" />
        
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>Isso obviamente não significa sermos regenerados novamente. O novo nascimento acontece uma vez por todas. Significa sim que, aquilo que nos regenerou, será aquilo que vai nos renovar a vida – O evangelho!</li>
          <li>Se você estudar a carta toda, vai perceber que é o que Paulo faz. Ele prega as boas novas do evangelho para aqueles que já eram convertidos. Agora, não para convertê-los, mas para reavivá-los! E como ele faz isso? (Gl.4.4-8)</li>
          <li>Cristo encarnou como servo da Lei, a fim de redimir os servos da Lei. Ele se humilha ao nível de servo, para nos elevar ao nível de filhos! É o que Paulo diz em Fp.2.5-7</li>
          <li>Você não pode continuar vivendo de onde Cristo, pelo sacrifício dele, já te tirou! É como voltar a uma condição de vida inferior. Uma vida abaixo da qual Deus preparou para você.</li>
          <li>O verbo redimir, era o ato de comprar um escravo numa feira e deixá-lo livre. Deus nos comprou da escravidão do pecado e da Lei. Mas ao invés de nos deixar ir, Ele nos adotou!</li>
          <li>Que pai, depois disso, ficaria feliz, se o agora filho adotado e amado, desejasse voltar a viver como escravo novamente?</li>
        </ul>

        <p className="mb-6 font-bold text-lg text-center text-rose-700 dark:text-rose-400 uppercase">A Sua Adoção Custou A Redenção Pelo Sangue Do Filho De Deus! Não Despreze O Amor Paterno De Deus!</p>

        <HighlightBox title="PERGUNTAS SALIENTES">
          <div className="space-y-6">
            <div>
              <p className="mb-2 font-medium">• O primeiro sentimento que aparece no seu coração quando você pensa em Deus é filiação ou serviço?</p>
              <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="O primeiro sentimento que aparece no seu coração quando você pensa em Deus é filiação ou serviço?" id="p2_txt_q_33" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Você se sente afastado de Deus como Pai, embora ainda o olhe como Deus?</p>
              <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="Você se sente afastado de Deus como Pai, embora ainda o olhe como Deus?" id="p2_txt_q_34" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Você sente saudades de Deus?</p>
              <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="Você sente saudades de Deus?" id="p2_txt_q_35" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Você acha que ele sente a sua falta?</p>
              <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="Você acha que ele sente a sua falta?" id="p2_txt_q_36" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• E como posso ter certeza de que sou filho de Deus?</p>
              <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="E como posso ter certeza de que sou filho de Deus?" id="p2_txt_q_37" placeholder="Escreva sua reflexão aqui..." />
            </div>
            <div>
              <p className="mb-2 font-medium">• Como me certificar que o amor de Deus por mim, é um amor de Pai?</p>
              <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="Como me certificar que o amor de Deus por mim, é um amor de Pai?" id="p2_txt_q_38" placeholder="Escreva sua reflexão aqui..." />
            </div>
          </div>
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">PRECISAMOS DO CONFIRMADOR INTERNO DA NOSSA FILIAÇÃO</h3>
        <VerseQuote text='E, porque vocês são filhos, Deus enviou o Espírito de seu Filho aos seus corações, o qual clama: "Aba, Pai".' refText="(v.6)" />
        
        <ul className="list-decimal pl-5 space-y-4 mb-6">
          <li>O Espírito Santo é a principal pessoa para nos dá certeza da nossa filiação. Ele faz isso de duas formas:<br/>
          <span className="block mt-2 font-medium">a) É Ele que, quando ouvimos este evangelho, nos faz crer na palavra da verdade.</span>
          <span className="block mt-1 font-medium">b) É Ele que quando cremos neste evangelho, diz a nossa alma órfã: Escute! Deus agora é seu Pai para sempre!</span>
          </li>
          <li>Quando nossa alma ouve isso pela primeira vez, pela primeira vez ela é capacitada a chamar Deus de Pai, pelo mesmo Espírito! Antes disso, mesmo sendo cristãos, chamamos Deus de muitos nomes. Mas a partir da revelação do evangelho e fé nele, pelo Espírito, nossa alma chama Deus de Aba, Pai!</li>
        </ul>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2 font-medium">Você pode dizer de você mesmo que já teve esta experiência?</p>
          <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="Você pode dizer de você mesmo que já teve esta experiência?" id="p2_txt_q_39" placeholder="Escreva sua reflexão aqui..." />
        </HighlightBox>

        <ul className="list-decimal pl-5 space-y-4 mb-6 mt-8">
          <li>Aba era uma expressão usada por criancinhas judias. Equivale ao papai que a criança brasileira usa. Agora, Aba, também era o nome pelo qual Jesus chamava a Deus. Você pode imaginar um homem formado, de 30 anos chamando Deus de papai?</li>
          <li>Esta expressão, Aba, carrega ternura, confiança, amor e segurança. Filhos com mentalidade de escravos, sentem até vergonha de chamar Deus assim: Papai! Acham-se grandinhos demais. Mas Jesus não! Por quê? Porque Jesus não apenas sabia que Deus era seu Pai. Jesus sentia isso! Sentia o amor de Deus como um filho pequeno não só sabe, mas sente o amor do Pai.</li>
        </ul>

        <p className="mb-8 font-bold text-lg text-center text-rose-700 dark:text-rose-400">Você pode mais do que saber que Deus é seu Pai. Pelo Espírito Santo você pode sentir o que o Pai sente por você agora mesmo!</p>

        <HighlightBox title="PERGUNTA SALIENTE">
          <p className="mb-2 font-medium">Quais são os principais benefícios que você obteve na sua relação com o Espírito Santo?</p>
          <ReflectionInput chapterTitle="8. Vivendo Como Filhos de Deus" question="Quais são os principais benefícios que você obteve na sua relação com o Espírito Santo?" id="p2_txt_q_40" placeholder="Escreva sua reflexão aqui..." />
        </HighlightBox>

        <h3 className="text-xl font-bold mb-4 mt-10 text-rose-700 dark:text-rose-400 uppercase">O QUE SUA ALMA SABE QUE DEUS SENTE POR VOCÊ, É O QUE VOCÊ SENTE POR DEUS.</h3>
        <ul className="list-decimal pl-5 space-y-4 mb-8">
          <li>Esta é uma boa pergunta: O que você acha que Deus sente por você neste exato momento?</li>
          <li>Se você ainda carrega uma mentalidade de escravo, sua resposta vai depender de como você viveu o dia ou a semana. Vai depender de como está sua cota de obediência, dedicação e santidade. Se estiver baixa, você não poderá acreditar de jeito nenhum que o que Deus sente por você agora pode ser bom. Não pode ser afeto por um filho. Não pode ser amor de um pai. Só se você viveu um dia, semana ou mês exemplar, dedicado e justo.</li>
          <li>Mas entenda bem duas coisas para todo sempre: <strong className="text-rose-700 dark:text-rose-400">DEUS SENTE POR VOCÊ QUE CRÊ, O QUE ELE SENTE POR JESUS SEU FILHO.</strong></li>
          <li>E outra: <strong className="text-rose-700 dark:text-rose-400">DEUS SENTE O QUE SENTE POR VOCÊ, NÃO POR CAUSA DE VOCÊ, MAS POR CAUSA DE JESUS!</strong> Sem Jesus, e sua confiança nele, Deus nunca poderia sentir amor por você. Nem orgulho. Apenas tristeza e ódio!</li>
          <li>Mas porque você confia em Jesus e seu sacrifício como sendo aquilo por meio do qual Deus te ama e te salva, Deus ama você, o filho imperfeito, como se fosse o Filho Perfeito e Eterno dEle. É quando você passa a viver isso pelo evangelho, que sua alma, pelo Espírito, realmente fala com Deus como um filho pequeno fala com o pai.</li>
        </ul>
      </>
    )
  },
  {
    id: 9,
    title: "Conclusão Final",
    content: (
      <>
        <h3 className="text-xl font-bold mb-4 mt-4 text-rose-700 dark:text-rose-400 uppercase">HÁ UMA NOVA VIDA ESPERANDO POR NÓS</h3>
        <p className="mb-8 font-medium">Há uma nova vida esperando por nós que ainda nem começamos viver de verdade. Uma, não como escravos mendigando vida. Mas uma como filhos herdeiros de Deus.</p>
        
        <div className="space-y-6 mb-10">
          <VerseQuote text="Assim, você já não é mais escravo, mas filho; e, por ser filho, Deus também o tornou herdeiro." refText="Gálatas 4.7" />
          
          <VerseQuote text='Antes que viesse esta fé, estávamos sob a custódia da lei, nela encerrados, até que a fé que haveria de vir fosse revelada. Assim, a lei foi o nosso tutor até Cristo, para que fôssemos justificados pela fé. Agora, porém, tendo chegado a fé, já não estamos mais sob o controle do tutor. Todos vocês são filhos de Deus mediante a fé em Cristo Jesus.' refText="Gálatas 3.23-26" />
          
          <VerseQuote text='Pois vocês não receberam um espírito que os escravize para novamente temer, mas receberam o Espírito que os adota como filhos, por meio do qual clamamos: "Aba, Pai". O próprio Espírito testemunha ao nosso espírito que somos filhos de Deus. Se somos filhos, então somos herdeiros; herdeiros de Deus e co-herdeiros com Cristo, se de fato participamos dos seus sofrimentos, para que também participemos da sua glória.' refText="Romanos 8.15-17" />
        </div>

        <HighlightBox title="O FIM DA MENTALIDADE ESCRAVA">
          <p className="text-sm">Aprofunde seu coração no evangelho! Existem dois tipos de escravidão a qual a nossa alma estará sempre sujeita a se submeter. Lucas 15 nos mostrou isso. Uma é a escravidão do pecado, como o irmão mais novo. A outra é a escravidão da obediência, como o irmão mais velho. Use o evangelho para dizer todos os dias a sua alma: EU SOU FILHO DE DEUS! Isso fará com que a prática do pecado não seja necessária, e a obediência ao Pai lhe seja desejada!</p>
        </HighlightBox>

        <p className="mb-4 mt-10">Adoração, evidentemente precisa ser autêntica, no sentido de ser verdadeira. Porém, não existe adoração originária no homem. Não é o homem que determina como deve adorar a Deus. É somente Deus quem pode determinar como Ele quer e deve ser adorado.</p>
        <p className="mb-8">Por isso, se desejamos de fato adorá-lo, não devemos perguntar ao nosso coração como fazer isso. Se quisermos saber como deve ser a nossa adoração a Deus, devemos perguntar a revelação que Ele deixou para nós nas Escrituras. Ao nosso coração devemos perguntar se estamos fazendo isso. Coração, você está de verdade adorando Deus como Ele quer?</p>
        
        <ActionBox title="PENSAMENTO FINAL">
          <p className="text-sm font-medium mb-4">Segundo John Piper, no seu livro "O Centro da Adoração":</p>
          <VerseQuote text="Adoração é satisfação em Deus. Encantamento e satisfação com sua beleza singular. Felicidade no próprio ser divino. Assim, adoração tem um alvo. A glória de Deus." refText="" />
        </ActionBox>

        <h3 className="text-xl font-bold mb-4 mt-12 text-rose-700 dark:text-rose-400 uppercase">AVALIAÇÃO E PLANO PESSOAL</h3>
        <p className="mb-6 font-medium italic">Quais foram as principais mudanças que eu tive neste discipulado?</p>
        
        <div className="space-y-6 mb-12">
          <div>
            <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">• Em relação a minha forma de pensar mudou...</p>
            <ReflectionInput chapterTitle="Conclusão Final" question="Em relação a minha forma de pensar mudou..." id="p2_txt_q_41" placeholder="Escreva sua reflexão aqui..." />
          </div>
          <div>
            <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">• Em relação aos meus sentimentos mudou...</p>
            <ReflectionInput chapterTitle="Conclusão Final" question="Em relação aos meus sentimentos mudou..." id="p2_txt_q_42" placeholder="Escreva sua reflexão aqui..." />
          </div>
          <div>
            <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">• Em relação as minhas atitudes, mudou...</p>
            <ReflectionInput chapterTitle="Conclusão Final" question="Em relação as minhas atitudes, mudou..." id="p2_txt_q_43" placeholder="Escreva sua reflexão aqui..." />
          </div>
          <div>
            <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">• Em relação aos meus valores, mudou...</p>
            <ReflectionInput chapterTitle="Conclusão Final" question="Em relação aos meus valores, mudou..." id="p2_txt_q_44" placeholder="Escreva sua reflexão aqui..." />
          </div>
          <div>
            <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">• Para continuar crescendo no discipulado em adoração eu vou...</p>
            <ReflectionInput chapterTitle="Conclusão Final" question="Para continuar crescendo no discipulado em adoração eu vou..." id="p2_txt_q_45" placeholder="Escreva sua reflexão aqui..." />
          </div>
          <div>
            <p className="mb-2 font-bold text-rose-700 dark:text-rose-400">• Para me ajudar nesta novo andar vou procurar...</p>
            <ReflectionInput chapterTitle="Conclusão Final" question="Para me ajudar nesta novo andar vou procurar..." id="p2_txt_q_46" placeholder="Escreva sua reflexão aqui..." />
          </div>
        </div>

        <ActionBox title="SOBRE A ESCOLA DE MINISTÉRIOS">
          <div className="space-y-3 text-sm">
            <p><strong>Quem Somos:</strong> Um centro de capacitação ministerial trabalhando o discipulado e mentoria pelo desenvolvimento do seu SER, CONHECER e FAZER. Nascemos em 2009, após um tempo de peregrinação espiritual do Pr. Marcio Gonçalves.</p>
            <p><strong>Dinâmica da Graça:</strong> Este conteúdo é fruto de quase 10 anos de estudo, meditação, oração e aplicações à própria vida e de muitos outros, sendo o currículo principal da Escola de Ministérios Marcio Gonçalves. Apresentado anualmente em congressos por 14 anos nas igrejas IPE e Casa de Oração.</p>
            <p><strong>Missão:</strong> Gerar, pela apresentação do Evangelho da Graça, mentes teológicas e corações inflamados pela glória de Deus. Quando a mente e o coração são tocados, as ações fluirão do evangelho.</p>
          </div>
        </ActionBox>

      </>
    )
  },
  {
    id: 10,
    title: "O Autor",
    content: (
      <>
        <div className="flex flex-col md:flex-row gap-6 mb-10 mt-4">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-rose-700 dark:text-rose-400 uppercase">Marcio Gonçalves</h3>
            <p className="mb-4 font-medium text-justify">
              Marcio Gonçalves é teólogo, terapeuta cristão, discipulador e pastor há mais de 20 anos. É professor e idealizador da ESCOLA DE MINISTÉRIOS MARCIO GONÇALVES. Autor de diversos livros, entre eles: <span className="font-bold">O SALVADOR, A QUEDA, O NOVO, DINÂMICA DA GRAÇA, REDESCOBRINDO A ALEGRIA DA SALVAÇÃO, FAÇAMOS UM DEUS</span>, entre outros.
            </p>
            <p className="mb-4 font-medium text-justify">
              É especialista nas áreas do SER em vida cristocêntrica, expositor bíblico, eclesiologia bíblica, teologia bíblica e sistemática, hermenêutica e capacitação de ministérios. É produtor digital e web designer. Casado com Helen Gonçalves e pai de 3 filhos. Reside atualmente em Maricá / RJ.
            </p>
          </div>
        </div>

        <h4 className="text-xl font-bold mb-6 text-rose-700 dark:text-rose-400 uppercase">Trajetória Ministerial e Acadêmica</h4>
        
        <ul className="list-disc pl-5 space-y-4 mb-8 font-medium">
          <li>Lecionou como professor no curso de bacharel teologia no CITERJ (Centro Interdenominacional de Teologia do Estado do Rio de Janeiro), nas matérias de Teologia Bíblica do Antigo e Novo Testamento, Hermenêutica e Exegese em 2013 a 2016 em São Gonçalo e Maricá.</li>
          <li>Pós-graduando em Teologia Reformada pelo Instituto brasileiro de Teologia Reformada.</li>
          <li>Fez parte do Conselho pedagógico do mesmo e é autor de várias matérias do conteúdo pedagógico do CITERJ.</li>
          <li>Lecionou como professor de teologia no IBE (Instituto Bíblico Ebenézer) e no IBADERJ (Instituto Bíblico das Assembleias de Deus do Rio de Janeiro) nos anos de 2005 em Maricá.</li>
          <li>Lecionou como professor no Curso de Teologia CASA FIRME nas matérias de Teologia Sistemática e Panorama do Antigo e Novo Testamento nos anos de 2017.</li>
          <li>Foi líder do MAPI (Ministério de apoio a Pastores e Igreja), braço da SEPAL, na região de Maricá nos anos de 2009.</li>
          <li>Participou da elaboração do CCL (Centro de Capacitação de Liderança), sendo produtor de 70% do conteúdo do curso nas áreas de Vida com Deus, Discipulado e Liderança Bíblica. Foi professor nestas matérias por 7 anos ininterruptos no mesmo curso na Igreja Batista Atos 2 em Maricá.</li>
          <li>Foi pastor na IPE em São Gonçalo por 17 anos. Uma pequena Igreja numa comunidade carente hoje pastoreada pelo Pr George Soares.</li>
        </ul>
      </>
    )
  }
];
