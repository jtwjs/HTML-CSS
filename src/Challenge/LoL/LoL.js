const sideMenu = document.querySelector(".additional-info--nav");
const champList = document.querySelector(".champions-list");
let selectedChamp;

function changeChampImg(elm) {
  const baundary = document.querySelector(".baundary");
  const profile = document.querySelector(".champion--profile");
  baundary.style.backgroundImage = `url(assets/${elm}skin.jpg)`;
  baundary.style.opacity = "0.8";
  profile.style.backgroundImage = `url(assets/${elm}.png)`;
}

function inactivate(elm) {
  elm.classList.remove("activate");
}

function activate(elm) {
  elm.classList.toggle("activate");
  if (elm.classList.contains("champion")) selectedChamp = elm;
}

function champClickHandler(e) {
  let target = e.target;
  while (!target.classList.contains("champion")) {
    target = target.parentNode;

    if (target.nodeName == 'BODY"') {
      target = null;
      return;
    }
  }
  const champName = target.querySelector(".champion--name").innerText;
  if (selectedChamp) {
    inactivate(selectedChamp);
  }
  activate(target);
  changeChampImg(champName);
}

function sideMenuHandler(e) {
  const story_text = document.querySelector(".story--content");
  let target = e.target;
  let dropSelect;
  while (!target.classList.contains("story")) {
    target = target.parentNode;

    if (target.nodeName == "BODY") {
      target = null;
      return;
    }
    if (target.classList.contains("drop-item")) {
      dropSelect = target;
    }
  }

  if (dropSelect) {
    if (dropSelect.innerText == "1편") {
      story_text.innerHTML = `<span class="round">[1/8]</span>
      <br>아이오니아에 영혼의 꽃이 다시는 피어나지 않을까 봐 두려워하는 이가 많았다. 영혼의 꽃이 피지 않는 것은 아이오니아가 여전히 불균형에 잠식되어 있다는 신호였다. 많은 이가 영혼의 꽃 없이, 축제 없이 성년을 맞았다.
        <br><br>
        하지만 파스코마는 일생을 살면서 꽃은 늦게 피더라도 반드시 다시 핀다는 사실을 깨달았다.
        전쟁이 발발한 이래 처음으로 영혼 나무에 새 꽃봉오리가 올라왔다. 섬세한 진줏빛 꽃봉오리의 달콤한 향이 공기를 가득 채웠다. 파스코마는 지난 축제를 어제 일처럼 기억했다. 손녀가 태어난 후 몇 해가 지났을 무렵이었다. 파스코마는 남편 오케레이와 영혼 차를 마시며 세상을 떠난 사랑하는 이들과 이야기를 나눴다. 두 사람은 이야기를 통해 자신들이 잘 지내며 떠난 이를 기억한다는 것을 보여 주었다. 상실을 겪은 후 잊을 것은 잊고 마음의 평화를 찾아 앞으로 나아가기 위한 방식이었다. 이승에 남은 가족이 잘 지내리라는 것을 확인한 이들은 편안한 마음으로 영혼 세계에 돌아갔다.
        <br><br>
        그러나 이번에 파스코마 곁에는 오케레이가 없을 것이다. 오케레이는 녹서스가 처음으로 침공한 후 얼마 지나지 않아 전사했기 때문이다. 파스코마는 오케레이에게 할 말이 정말 많았다. 묻고 싶은 것도 많았다.
        <br><br>
        하지만 먼저 축제를 맞을 준비를 해야 했다.
        <br><br>
        파스코마의 찻집에는 이름이 없었다. 웨흘레를 방문한 이들은 정문 밖에 있는 독특한 찻주전자 조형물을 보고 이곳이 찻집이라는 사실을 알았다. 파스코마는 찻집을 지을 때 실력 좋은 나무술사에게 여러 나무를 섞어 계절에 따라 다양한 색상의 꽃이 피는 조형물을 만들어 달라고 부탁했다. 지금은 강렬한 자홍색으로 물든 찻주전자 위에는 은은한 분홍색 등불이 반쯤 주렁주렁 달려 있었다.
        <br><br>
        "이투렌?" 파스코마가 찻집 안을 향해 소리쳤다. "좀 도와줘." 이투렌은 키가 커서 높은 가지에 등을 달 수 있었다.
        <br><br>
        "나한테 맡겨, 내 사랑." 과묵한 이투렌은 파스코마가 가리킨 곳에 등불을 다는 내내 미소를 머금고 파스코마를 내려다보았다. 그러나 그것은 걱정이 어린 슬픈 미소였다.
        <br><br>
        이투렌은 전쟁이 끝난 이래 파스코마의 연인이자 동반자였다. 하지만 그동안 영혼의 꽃 축제가 열리지 않아 두 사람이 오케레이의 영혼과 이야기할 기회는 없었다. 파스코마는 오케레이의 축복을 받지 못해 마음 편히 재혼하지 못했다. 오래전 아내를 잃은 이투렌은 얼마든지 기다릴 수 있었지만 걱정이 앞섰다. 파스코마 역시 이투렌을 안심시키려 최선을 다했으나 오케레이가 재혼을 반대하면 어떻게 해야 할지 알 수가 없었다.
        <br><br>
        등불을 모두 단 파스코마와 이투렌은 바닥을 와인으로 닦고, 거울 앞에 초를 두 개씩 놓고, 축제 때 밀려들 손님이 쓸 방을 나누며 객실과 찻집 이곳저곳을 정리했다. 이른 아침에 시작한 일은 늦은 오후가 되어 석양이 질 때까지 계속되었다. 그때 문을 두드리는 소리가 들렸다. "과거의 기쁨이 피어나길, 에마이!" 익숙한 목소리였다.
        <br><br>
        이투렌과 파스코마는 어리둥절한 표정으로 서로를 바라보며 전통대로 대답했다. "그리고 현재의 슬픔은 시들길." 파스코마의 딸 투라시의 목소리와 너무 비슷했다. 하지만 투라시일 리가 없었다. 투라시는 만 반대편에 있는 사이아투에 마을에 살았다. 산길로 한 달은 이동해야 갈 수 있는 곳이었다.
        <br><br>
        그러나 문을 열고 들어온 것은 투라시였다. 투라시의 미소는 제 아버지의 것과 똑 닮아 있었다. 파스코마는 달려가 딸을 부둥켜안았다. "투라시, 올 줄 몰랐는데! 정말 반갑구나. 사토카는 어디 있니? 쿠모히는?"
        <br><br>
        "사토카는 밖에서 짐을 지키고 있어요. 쿠모히는… 마을에 남기로 했고요." 파스코마는 남편 얘기를 하는 투라시의 목소리가 긴장한 것을 눈치챘다. "일부러 영혼의 꽃 축제에 맞춰서 왔어요. 사토카한테도 오-파를 만나게 해 주려고요."
        <br><br>
        이투렌은 이상하다는 듯 투라시를 바라보았다. "하지만 꽃봉오리는 지난주에야 맺히기 시작했는데."
        <br><br>
        투라시가 미간을 찌푸리며 대답하려는 순간 멀쑥한 키의 젊은 여자가 뚱한 표정으로 문을 박차더니 나무 여행 가방을 끌고 들어왔다. 이투렌이 도와주려 몸을 숙였지만 여자는 손을 휘저으며 거절했다. 투라시는 화가 난 얼굴로 자신의 딸을 바라보았다. "사토카, 도와주신다고 하잖아."
        <br><br>
        "혼자 할 수 있어요." 사토카는 다른 말 없이 바닥 한가운데에 여행 가방을 던져 놓고 다시 밖으로 나갔다.
        <br><br>
        파스코마는 투라시를 돌아보았다. "축제 때문에 왔니?"
        <br><br>
        잠시 머뭇거리던 투라시가 고개를 끄덕였다. "네. 축제 때문에 왔어요."
        <br><br>                            
        투라시의 말이 거짓말이라는 사실은 중요하지 않았다. 딸의 거뭇거뭇한 눈가를 본 파스코마는 딸에게 시간이 필요하다는 것을 알았다. 난로 옆에 무릎을 꿇고 작게 불을 붙인 파스코마는 다시 딸을 올려다보며 따스한 미소를 지었다. "그럼 기억에 남을 만한 축제를 준비해야겠구나."
        <br><br>`;
    } else if (dropSelect.innerText == "2편") {
      story_text.innerHTML = ` <span class="round">[2/8]</span>
      <br>오래전 세상은 완벽한 균형을 이루고 있었다. 마치 생명으로 가득 찬 거대한 나무 같았지. 나뭇가지, 잎, 꽃 하나하나가 햇빛과 비에서 양분을 받기 좋은 자리에 놓인 나무 말이야. 사람, 동물, 영혼은 모두 평화로웠어. 전투나 유혈 사태 같은 것이 한 번도 일어나지 않아 '전쟁'이라는 단어조차 없었지.
      <br><br>
      그러던 어느 날 문지기와 거두는 자가 마주쳤다. 문지기가 영혼 세계로 들여보내 평온을 찾은 영혼이 얼마나 많은지 본 거두는 자는 문지기를 질투하게 되었—
      <br><br>
      "잠깐만요. 문지기요? 그게 아니라 여우겠죠."
      <br><br>
      사토카가 끼어드는 바람에 옛날이야기를 들려주던 이투렌은 말을 멈출 수밖에 없었다. 이투렌은 사토카에게 집에 있는 날붙이를 묻는 것을 도와 달라고 부탁한 상태였다. 부엌칼, 톱, 낫, 파스코마가 이모에게 물려받은 녹슨 칼까지 전부 묻어야 했다.
      <br><br>
      "문지기를 여우나 개, 심지어 표범이라고 하는 사람도 있더구나." 이투렌은 미소 지으며 말했다. 사토카는 이곳에 온 이후 입을 잘 열지 않았다. 이투렌은 함께 일하며 이야기를 들려주면 사토카가 입을 열지 않을까 기대했다. "얘야, 문지기가 여우라고 생각하니?"
      <br><br>
      사토카는 눈을 굴렸다. "전 어린애가 아니니까 그런 말투로 얘기하지 않으셔도 돼요."
      <br><br>
      두 사람은 계속해서 묵묵히 땅을 팠다.
      <br><br>
      이투렌은 참을성 있게 기다렸다.
      <br><br>
      사토카가 느릿하게 입을 열었다. "파-이르는 얘기를 들려줄 때 문지기를 여우라고 하거든요. 그러니까… 문지기는 여우예요."
      <br><br>
      "난 문지기가 수달이었으면 좋겠구나." 이투렌이 부드럽게 말했다. 이투렌은 항상 영혼 세계를 급류로 가득한 끝없는 강으로 생각했다. 민첩한 수달은 자칫해서 급류에 휩쓸리지 않도록 새로 도착한 영혼들에게 위험한 강에서 이동하는 방법을 알려 주는 문지기 역할에 딱 들어맞았다.
      <br><br>
      이투렌을 힐끗거린 사토카가 중얼거렸다. "얘기 계속하세요. 왜 날붙이를 묻는지 궁금하니까."
      <br><br>
      이투렌은 목을 가다듬고 다시 입을 열었다.
      <br><br>
      거두는 자는 문지기의 도움으로 평온을 찾은 모든 영혼을 시기해 어떤 계획을 꾸몄다. 가장 튼튼하고 소리가 큰 종 두 개를 골라 녹인 후 열두 밤이 넘게 두드려 칼 두 개를 만들었지. 거두는 자는 첫 번째 칼에 질투를 쏟아부었어. 두 번째 칼에는 집착을 쏟아부었다. 그리고 봄이 시작되자 두 검의 영혼이 물질 세계에서 꽃을 피우게 했지. 두 검은 땅에서 묘목처럼 자라났단다.
      <br><br>
      그래, 묘목처럼. 숲에서 우연히 검을 본 두 형제는 그것이 묘목이라고 생각했어.
      <br><br>
      두 형제는 가장 친한 친구였다. 서로 의리를 지키며 각자 자신의 역할이 무엇인지 잘 알았지. 형은 언젠가 아버지의 유명한 검과 땅을, 동생은 아버지의 배를 물려받을 운명이었어. 둘은 자신들이 위대한 영웅이 되리라 믿었다. 한 사람은 고향에서, 한 사람은 이국에서 말이야. 그러던 어느 봄날, 형제는 숲에서 자라는 검 묘목 두 개를 보았어. 두 사람 다 그렇게 빛나거나 날카로운 나무는 본 적이 없었지. 함께 묘목을 벤 형제는 각자 검을 하나씩 지고 집으로 돌아갔다.
      <br><br>
      하지만 두 사람은 그것이 살아 있는 동안 형제로서 함께하게 될 마지막 일이라는 사실을 알지 못했어. 형제가 집으로 돌아가는 동안 검에서 흘러나온 이상한 수액이 형제의 목으로 흘러내렸다. 형제의 머릿속은 거두는 자의 끔찍한 생각과 감정으로 가득 찼지. 그날 바로 서로에게 등을 돌리진 않았지만, 결국 두 사람은 훗날 검을 맞대게 되었어. 두 검이 맞부딪히는 소리가 얼마나 큰지, 물질 세계와 영혼 세계 모두에 울려 퍼질 정도였다.
      <br><br>
      사토카는 눈살을 찌푸렸다. "그게 아니에요. 형제는 검을 직접 만들었어요. 아버지가 돌아가신 후 아버지의 검을 녹여서요. 두 사람은 서로의 검이 더 좋다고 생각했죠. 그래서 싸우기 시작했고요. '거두는 자'는 아무 상관도 없어요."
      <br><br>
      이투렌은 손에 묻은 흙을 닦으며 방금 객실 바닥에 판 구멍을 내려다보았다. 객실 뿌리가 두껍고 튼튼하게 자라 있었다. 이투렌은 약간 힘을 줘 첫 번째 검을 뿌리 밑에 조심스레 밀어 넣었다. "옛날이야기잖니. 오랜 세월 동안 수없이 많은 사람의 입에서 입으로 전해졌으니 조금씩 다를 수밖에 없지. 내가 아는 이야기는 이 이야기란다."
      <br><br>
      사토카는 녹슨 검날을 손가락으로 두드리며 잠시 생각에 잠겼다. "그래서 그 형제 이야기 때문에 날붙이를 묻는 거예요?"
      <br><br>
      "그래. 형제가 서로를 해칠 무기를 들지 못하면 싸울 일도 없으니까. 과거의 갈등을 잊는 평화로운 축제를 보내기 위한 의식이지. 저것 좀 보렴." 이투렌은 또 다른 뿌리 아래에 박힌 낫을 가리켰다. "평화롭게 자란 뿌리에 맡긴 날붙이는 폭력에 뿌리를 둔 이야기 속 검 묘목처럼 자라지 않아."
      <br><br>
      이투렌은 이야기를 마저 할까 고민했지만 자신과 사토카 사이에 간신히 형성되기 시작한 끈을 잃고 싶지 않았다. 대신 이투렌은 검을 달라는 의미로 손을 내밀었다.
      <br><br>
      사토카는 검을 빼앗기지 않으려는 듯 끌어안았다. "아니요. 제가 묻을래요. 어디에 묻어야 하는지만 알려 주세요."
      <br><br>
      이만하면 성공적이었다.
      <br><br>
      이투렌은 뿌리를 최대한 건드리지 않고 뿌리 아래를 파는 방법을 보여 주었다. 두 사람은 찻집 이곳저곳을 돌아다니며 각 방 뿌리 아래에 날붙이를 묻었다. 그렇게 파스코마와 투라시가 만난 후 처음으로 진지하게 이야기할 기회를 주었다.
      <br><br>
      `;
    } else if (dropSelect.innerText == "3편") {
      story_text.innerHTML = `  <span class="round">[3/8]</span>
      <br>저녁 식사 후 이투렌과 사토카가 날붙이를 묻으러 가자 파스코마와 투라시는 고급 포도주를 땄다. 마시면 풍부한 코코아 자두 향이 혀끝에 남는 이 포도주는 말하길 주저하는 사람과 진지한 대화를 나눌 때 마시기 좋은 술이었다. 이미 석 잔을 마신 투라시는 잔에 담긴 포도주를 빙빙 돌리며 포도주에 이리저리 반사되는 난로 불빛을 바라보고 있었다.
      <br><br>
      "투라시?" 파스코마는 어떻게 물어야 할지 고민하며 잠시 말을 멈췄다. 투라시가 어머니의 눈을 마주했다. "쿠모히는 왜 마을에 남았니? 왜 함께 축제에 오지 않았어?"
      <br><br>
      파스코마는 투라시가 아직 이 얘기를 하고 싶어 하지 않는다는 사실을 알았다. 그러나 벌써 두 사람이 찻집에 온 지도 사흘째였다. 파스코마는 이 문제가 혹시 웨흘레에도 영향을 줄 만한 일인지, 안전을 위해 자신과 이투렌이 뭔가 해야만 하는 일인지 확인해야 했다. 가뜩이나 축제 기간에는 마을이 낯선 이들로 북적거렸으니까.
      <br><br>
      한숨을 쉰 투라시가 입을 열었다. "사이아투에나 절벽에 있는 다른 마을과 거래하고 싶다며 만을 타고 접근하는 녹서스 배들이 있어요. 그자들은 아주… 조심스럽게 행동하죠. 자신들이 아무 짓도 하지 않는다는 것을, 누구도 해칠 의도가 없다는 것을 보여 주려는 것처럼요." 투라시가 잔을 어찌나 꽉 쥐는지, 파스코마는 잔이 깨지지 않을까 걱정했다. "그런데 바로 그 녹서스인들이 지역을 정찰하거나 정찰용 새를 날리다가 좌초된 것을 똑똑히 봤다는 주민들이 있어요. 그 사람들은 녹서스인들이 여전히 아이오니아를 지배하려는 야욕을 버리지 않았다고 생각해요."
      <br><br>
      파스코마는 고개를 끄덕였다. 녹서스는 그런 식으로 정찰한 후 아이오니아를 침공한 전력이 있었다. 투라시가 불안해할 만도 했다. "쿠모히는?"
      <br><br>
      "쿠모히는 그 모습을 직접 보진 않았어요. 하지만 목격했다는 친구와 이웃의 말을 믿죠."
      <br><br>
      "그 장면을 직접 확인하려고 마을에 남았구나."
      <br><br>
      "그건 아니에요." 포도주를 한 모금 길게 마시는 투라시의 손이 떨렸다. "다들 녹서스인을 쫓아내려고 해요, 에마이. 배에 올라가 던질 수 있는 건 뭐든 바다에 던져 버리고 있죠. 지금까지는 그 정도에서 그쳤지만…" 투라시는 말끝을 흐렸다.
      <br><br>
      "저항 운동을 하려는 거구나." 오케레이도 저항 운동에 가담했었다.
      <br><br>
      "녹서스인들도 눈치를 채고 더 많은 배를 보내고 있어요. 그것도 병사들이 탄 배를요. 전 떠나야 한다고 생각했어요." 투라시는 무릎을 끌어안았다. "쿠모히의 생각은 달랐고요."
      <br><br>
      파스코마는 자리에서 일어나 투라시의 이마에 조용히 입을 맞추며 딸의 손을 감쌌다. "너와 사토카가 오니 정말 좋구나. 축제가 끝나자마자 가지 않아도 된단다."
      <br><br>
      투라시는 눈물에 젖어 떨리는 목소리로 속삭였다. "에마이—"
      <br><br>
      파스코마는 투라시의 손을 꽉 쥐었다. "그래. 또다시 전쟁 때문에 사랑하는 사람을 잃을 수는 없어. 이곳에 있거라."
      <br><br>`;
    } else if (dropSelect.innerText == "4편") {
      story_text.innerHTML = ` <span class="round">[4/8]</span>
      <br>다음 날 사토카는 시장을 걸으며 해야 할 일에만 집중하려고 노력했다. 이투렌은 망가진 장식용 종을 대신할 새 종을 구하러 간 상태였다. 사토카는 막 자신과 어머니가 쓸 가면 두 개를 사 오라는 오-마의 심부름을 마친 참이었다. 심부름이 끝나면 다시 이투렌을 만나 집, 그러니까 찻집으로 돌아가는 것이 원래 계획이었다.
      <br><br>
      하지만 사토카는 축제 준비로 한창인 시장의 모습에 넋을 잃고 말았다. 예복에 케이크에 꽃에… 지난 영혼의 꽃 축제는 사토카가 아주 어렸을 때 열려서 거의 기억이 나지 않았다.
      <br><br>
      진열된 케이크를 구경하던 사토카는 그 뒤쪽에서 대규모 인형극을 공연하고 있는 것을 발견했다. 바퀴 위에 커다란 나무 벽을 세운 후 중앙에 반투명한 종이를 붙여 만든 극장이 광장 한가운데에 세워져 있었다. 불을 다루는 마법사가 만든 빛으로 생긴 그림자를 이용해 인형술사들이 복잡하게 자른 종이 인형을 움직였다. 이야기꾼은 앞에 서서 집중한 관객들에게 인형의 움직임에 맞춰 이야기를 설명하고 있었다.
      <br><br>
      "그래서 절망의 영혼은 우리 여주인공 체체구아에게 물었습니다. '정말 그 남자를 찾을 수 있다고 믿나?' 체체구아는 고개를 끄덕였지만, 절망 앞에서 희망을 말하는 것만큼 의미 없는 일은 없었죠."
      <br><br>
      사토카의 눈매가 매서워졌다. 아름다운 무대에 넋을 잃었던 사토카는 이야기꾼의 말에 정신을 차렸다. 체체구아는 사랑하는 사람을 찾으러 영혼 세계에 갔을 때 절망과 이야기해서는 안 됐다. 절망은 그 누구와도 이야기하지 않았으니까.
      <br><br>
      "절망은 한쪽 눈썹을 치켜올렸습니다. '내가 도와줄 수도 있다. 이름이 무엇이지, 필멸자여?' 재빨리 머리를 굴린 체체구아는 '나구이'라고 대답했습니다. 아무도 아니라는 뜻이었죠. 이제 절망은 체체구아가 사랑하는 이의 영혼을 찾을 수 있게 도와야만 했습니다. 하지만 진짜 이름을 알지 못했기 때문에 체체구아는 안전했죠. 적어도 당장은 말입니다."
      <br><br>
      잘못된 체체구아 이야기를 보는 사토카의 마음속에서 파-이르에게 들었던 이야기가 밝게 타올랐다. 사토카는 아버지와 사이아투에에 남아 있고 싶었다. 그랬다면 저항 운동을 도울 수 있었을 것이다. 키가 크고 힘도 세니 녹서스인들의 물건을 바다로 던지는 데 도움이 됐을 터였다. 녹서스인들은 당해도 쌌다. 사토카는 전쟁 이전의 시절을 기억하지 못했지만, 아이오니아가 아직 원래의 모습을 온전히 되찾은 것은 아니라는 사실을 알았다.
      <br><br>
      실망한 사토카는 발길을 돌렸다. 그러나 더 큰 무리가 모여들기 시작했다. 예상치 못한 일이었다.
      <br><br>
      웨흘레에 녹서스인들이 있었다.
      <br><br>
      녹서스인들은 갑옷을 입거나 무기를 들고 있진 않았지만 녹서스인 특유의 분위기를 풍기고 있었다. 적대적 천성, 혹은 우월감 때문일지도 모른다.
      <br><br>
      하지만 많아 봐야 중년쯤 되어 보이는 이 녹서스인 여섯 명의 태도는 달랐다. 자신들이 이 축제의 불청객이라는 것을 알기라도 하는 듯 미안해하는 기색이 역력했다. 그렇다 하더라도 녹서스인이 축제에 나타났다는 사실에는 변함이 없었다. 사토카는 속이 뒤집히는 것 같았다.
      <br><br>
      시장에 있는 아이오니아인들은 그들을 피해 멀찍이 떨어졌다. 이곳저곳으로 속삭이는 소리가 퍼져 나갔지만 감히 그들에게 꺼지라는 말을 하는 사람은 없었다. 비교적 젊은 녹서스 여자 하나가 어색한 미소를 지으며 동전 주머니를 꺼내 들더니 케이크 가판대로 가기 시작했다.
      <br><br>
      사토카는 누군가 무슨 말이라도 하길 바라며 주변을 돌아보았다. 뭐라도 해야만 했다.
      <br><br>
      자신이 나설 수밖에 없었다.
      <br><br>
      사토카는 케이크 쪽으로 다가오는 녹서스 여자를 내려다보았다. 여자는 사토카와 눈이 마주치자 자기소개라도 하려는 듯 손을 내밀었다.
      <br><br>
      사토카는 여자를 노려보며 여자의 발밑에 침을 뱉었다.
      <br><br>
      단체로 숨을 들이켜는 소리가 들려왔다. 사토카는 녹서스인들의 반응이 어땠는지 볼 수 없었다. 그 순간 누군가 거칠게 어깨를 붙잡았기 때문이다. 사토카는 위를 올려다봤다. 이투렌이 자신을 끌고 가면서 고개를 숙이며 사과하고 있었다.
      <br><br>
      모퉁이를 도는 이투렌 너머로 얼핏 보인 녹서스인들은 그저 그 자리에 서 있을 뿐이었다. 사토카가 발밑에 침을 뱉은 여자는 충격을 받은 표정이었다. 사토카는 의기양양해졌다. 만족스러웠다. 녹서스인들은 기가 죽어야 마땅했다.
      <br><br>
      두 사람은 누가 따라올 경우에 대비해 축제 장소 주위를 빙글빙글 돌았다. 그러나 이투렌이 걸을 때마다 새로 산 종이 딸랑거리는 소리를 냈다. 결국 종을 버린 이투렌은 사토카를 데리고 찻집으로 돌아갔다.
      <br><br>
      뒷문으로 들어가기 전, 이투렌이 휙 돌아서더니 사토카를 마주 봤다. 이투렌의 얼굴을 본 사토카는 깜짝 놀라 눈을 깜빡였다. 항상 밝거나 피곤한 표정뿐이었던 이투렌의 얼굴이 공포로 차 있었다. "저들은 싸우러 온 게 아니라 우리와 함께 축제를 즐기러 왔을 뿐이야, 사토카." 이렇게 격한 이투렌의 목소리는 처음이었다. "그럴 필요 없었잖니."
      <br><br>
      사토카는 사이아투에에 있는 아버지를, 저항 운동을, 지금 이 순간 마을을 침범하고 있을 녹서스 병사들을 떠올렸다.
      <br><br>
      "아니요, 그래야 했어요."
      <br><br>`;
    } else if (dropSelect.innerText == "5편") {
      story_text.innerHTML = `   <span class="round">[5/8]</span>
      <br>혼비백산하여 응접실로 들이닥친 투라시는 곧장 어머니에게 직행했다. 새 손님에게 찻주전자와 깨끗한 시트, 수건을 막 건넨 파스코마는 공포와 분노에 찬 투라시의 얼굴을 보고 손님을 객실로 보냈다.
      <br><br>
      "무슨 일이니?" 파스코마가 온화하게 물었다. 투라시는 이를 악물며 시장에서 사토카와 이투렌에게 있었던 일을 이야기했다. 종을 가져오지 못했다며 멋쩍게 사과하는 이투렌의 입을 열게 하는 데는 꽤 시간이 걸렸다. 그러나 사토카에게 자신의 잘못을 반성하게 하는 것은 불가능에 가까웠다.
      <br><br>
      "그 애가 그렇게 무모하고 위험한 짓을 했다는 게 믿기지가 않아요!" 투라시는 안전한 웨흘레에 있는 어머니 집으로 가족을 데려와 안심하고 있었다. 하지만 마을에 녹서스인들이 있는 데다 사토카가 그들을 자극하기까지 했다. 이렇게 되면 사이아투에를 떠난 의미가 없었다.
      <br><br>
      "사토카도 거의 다 컸잖니, 투라시. 그 애는 자신의 한계를 시험해 보고 있는 것뿐이야."
      <br><br>
      "그러다가 죽을 거예요. 그 녹서스인들… 무기가 없었다곤 하지만, 녹서스 군에서 복무한 자는 하나같이 피도 눈물도 없는 살인자라는 것 잘 아시잖아요."
      <br><br>
      "잠시만요." 두 여자는 깜짝 놀라 돌아섰다. 새 손님이 자신의 객실 문 앞에 서 있었다. 키가 크고 머리가 검은 여자의 특이한 호박색 눈은 망토에 달린 모자로 살짝 가려진 상태였다. "웨흘레에 전사들이 있다는 얘기인가요?"
      <br><br>
      "네, 맞아요." 투라시는 당황해하며 답했다. 말하면서 새로 온 손님 쪽으로 걸어온 줄도 몰랐다. 손님을 둘러싼 공기는 찻집의 다른 곳과 묘하게 다른 움직임을 보이며 이상하게 빛이 나는 듯했다. 투라시는 잠시 자신이 꿈을 꾸고 있는 게 아닐까 생각했다. "전쟁으로 단련된 자들이에요. 떠나게 해야 하지만, 아무래도—"
      <br><br>
      "아, 아니요." 손님이 온화하게 웃으며 말을 잘랐다. "그런 뜻으로 말한 게 아니에요. 절 보호해 줄 수 있는 사람을 찾고 있거든요. 경호원처럼요. 마을에 강한 전사가 어디 있는지 알려 주시면 가서 이야기를 나눠 보고 싶네요."
      <br><br>
      "안 됩니다." 파스코마의 목소리는 명확하고 단호했다. "축제 기간에 위험한 자를 머물게 할 수는 없어요. 경호원을 구할 생각이라면 다른 찻집을 알아보시는 게 좋겠습니다." 파스코마는 손님이 돌려주는 침대 시트를 받으려고 손을 내밀었다.
      <br><br>
      그러나 그러한 파스코마를 본 손님은 경쾌한 웃음을 터뜨렸다. "이곳이 이 마을 최고의 찻집 아닌가요? 여기보다 못한 찻집에서 머물 수는 없죠. 안 된다고 하시니 이곳으로 위험한 자를 데려오지는 않을게요."
      <br><br>
      윙크를 한 손님은 객실 안으로 사라졌다. 파스코마는 한숨을 내쉬며 딸을 돌아봤다. "괜찮을 거다, 투라시. 사토카는 계속해서 주의를 끌 정도로 어리석은 아이가 아니야."
      <br><br>
      고개를 끄덕인 투라시는 목이 멨지만 어머니를 향해 웃어 보였다. 어머니의 보살핌을 받는 것이 얼마나 안심되는 일인지 잊고 있었다. 마치 어린 시절로 돌아간 것만 같았다.
      <br><br>
      하지만 그때와는 달랐다. 투라시는 어렸을 때 걱정하거나 무서워하는 부모님을 본 적이 없었다. 부모님은 언제나 그 자리에 있는 든든한 산이나 바다와 같았다. 투라시는 아버지가 죽은 후에야 처음으로 흔들리는 어머니의 모습을 보았다.
      <br><br>
      그리고 곧 영혼의 꽃이 피어나는 지금, 아버지를 생각하는 어머니의 마음은 또다시 흔들리고 있었다. 어머니는 바라던 답을 듣지 못하면 어떻게 하실 생각일까?
      <br><br>
      문득 투라시는 어머니도 자신이 어떤 답을 원하는지 모를 수 있다는 생각이 들었다.
      <br><br>`;
    } else if (dropSelect.innerText == "6편") {
      story_text.innerHTML = ` <span class="round">[6/8]</span>
      <br>사토카는 살면서 이런 진수성찬을 처음 보았다. 축제 첫날 밤을 축하하기 위해 파스코마는 스무 명 남짓한 투숙객들에게 대접할 만찬을 준비했다. 사토카는 접시와 배를 채우며 다른 손님들과 이야기하거나 손님들이 하는 말을 들었다. 할머니를 찾아온 이래 가장 즐거운 일이었다.
      <br><br>
      다들 가면을 쓰거나 특이한 의상을 입고 있었다. 투라시는 사토카에게 축제에서 가면을 쓰고 절대 벗지 말라고 신신당부했다. 녹서스인들이 보복할 기회를 노리고 있을지 모른다는 것이었다. 사토카는 아무래도 상관없었다. 가면은 사토카의 마음에 쏙 들었다. 크고 화려한 뿔이 달리고, 배배 꼬여 아래로 휘어진 눈이 짓궂게 웃는 입가로 이어지는 가면은 아주 정교했다. 모든 죽음의 순간에 존재한다는 어린 소녀 '데려가는 자'의 가면이었다.
      <br><br>
      사토카는 저녁을 먹으며 호박색 눈을 지닌 손님과 데려가는 자를 놓고 열띤 토론을 벌였다. 여우, 그러니까 웨흘레에서 문지기라고 부르는 존재로 분장한 손님은 머리 위에 진짜 같은 동물 귀를 달고 있었다. 손님의 얼굴에는 수염 무늬가 그려져 있었다.
      <br><br>
      사토카가 주장했다. "하지만 사람이 죽을 때 그 자리에 있는 건 데려가는 자잖아요. 그러니까 영혼 세계로 영혼을 인도하는 것도 데려가는 자예요."
      <br><br>
      손님은 재미있다는 듯 느릿하게 말했다. "그렇다면 왜 사람이 죽으면 가장 날카로운 이를 뽑아 손에 쥐여 준다고 생각해? 그건 데려가는 자를 위한 것이 아니야."
      <br><br>
      사토카는 어깨를 으쓱했다. "장막 너머로 가기 위한 대가죠."
      <br><br>
      "누구에게 주는 대가지? 그 이를 대체 누가 쓰겠어. 바로 '쿠마이아'야."
      <br><br>
      "뭐요?"
      <br><br>
      "문지기 말이야. 쿠마이아는 끝없이 늘어나는 목걸이에 자신이 받은 이를 끼워 걸고 다니지. 자신이 영혼 세계로 인도하는 영혼의 삶을 이해하기 위해서. 도착할 무렵이면 쿠마이아는 영혼보다도 먼저 영혼이 평화로운 자신의 길을 따를 것인지, 괴로운 '락사숨'의 길을 따를 것인지 알게 돼. 쿠마이아는 고통받게 될 영혼을 도우려 무엇이든 하겠지만, 영혼의 운명을 그 이로 알 수 있다는 사실에는 변함이 없어."
      <br><br>
      "정말이에요?" 지난 몇 주 동안 이곳에 머물며 웨흘레와 사이아투에의 이야기가 다르다는 사실에 익숙해진 사토카는 어서 아버지를 만나 자신이 들은 이야기를 전부 들려주고 싶었다.
      <br><br>
      손님은 키득거렸다. "아니. 내가 지어낸 얘기야."
      <br><br>
      "아."
      <br><br>
      "내가 기억하기로 이를 손에 쥐여 주는 건 죽은 자의 나이를 기리기 위해서야. 현명한 노인의 이는 뭉툭하게 갈려 있고, 한창인 나이에 죽은 병사의 이는 젊음으로 날카롭지." 손님은 잠시 말을 멈추고 사토카를 보며 웃었다. "하지만 아는 이야기를 또 들으면 재미없잖아."
      <br><br>
      후식 시간이 되자 사토카는 이투렌이 이날 밤을 위해 지난 이틀 동안 구운 케이크를 신나게 먹어 치웠다. 바닥이 조금 탔지만 가운데는 달콤하고 촉촉해 풍미가 가득했다.
      <br><br>
      이투렌은 사토카부터 시작해 모두에게 케이크를 나눠 주었다. 마지막은 훌륭한 동물 귀 분장을 한 손님이었다. 손님은 이투렌의 팔뚝을 잡더니 조용히 무언가를 물어보며 이투렌의 눈을 가만히 들여다보았다.
      <br><br>
      사토카는 이투렌의 눈에서 초점이 사라지는 것을 보았다. 곧 이투렌은 고개를 끄덕이며 말했다. "그럼요. 검에 숙련된 자든 아니든, 누구든 이곳으로 데려와도 괜찮습니다. 이곳에선 사람을 차별하지 않아요."
      <br><br>
      손님은 이투렌의 팔을 꽉 쥐며 감사를 표했다. "고마워요. 부인 분에게도 말씀드리는 게 좋겠네요. 당신만큼 너그럽진 않은 것 같더군요."
      <br><br>
      이투렌은 또다시 고개를 끄덕였다. 사토카는 부엌으로 돌아서는 이투렌의 눈이 평소와 다른 색이라는 사실을 눈치챘다. 너무 순식간이라 빛 때문에 착각한 것일지도 몰랐지만, 평소 짙은 갈색인 이투렌의 눈은 사토카 옆에 앉은 여우 귀가 달린 여자의 눈과 같은 호박색으로 빛났다.
      <br><br>`;
    } else if (dropSelect.innerText == "7편") {
      story_text.innerHTML = `  <span class="round">[7/8]</span>
      <br>수면 아래로 해가 완전히 떨어지자 활짝 피어난 영혼의 꽃이 달빛을 받아 반짝이기 시작했다. 축제에 참가한 사람들은 환호성을 터뜨렸다. 오랜 세월이 흘러 마침내 꽃이 돌아온 것이다. 거리를 수놓은 등불은 산속 사원까지 이어졌다. 밝고 따뜻한 불빛이 가지에 달린 꽃의 섬뜩한 은빛과 어우러졌다.
      <br><br>
      파스코마도 다른 사람들처럼 들뜨고 싶었다. 만찬이 끝난 후 가면을 쓴 사토카와 함께 화려한 옷으로 갈아입은 파스코마는 오케레이의 꽃을 찾으러 나섰다. 그 꽃을 찾아야 오케레이의 영혼과 이어져 대화할 수 있었다. 예전에 파스코마는 자신이 찾는 꽃을 금세 찾아내곤 했다. 살아 있는 이의 심장은 사랑하는 이들의 멈춰 있는 심장과 보이지 않는 끈으로 항상 이어져 있다고들 했다.
      <br><br>
      하지만 이번에는… 나무에 피어난 영혼이 너무 많았다.
      <br><br>
      파스코마는 나뭇가지에 이렇게 많은 꽃이 피어난 모습을 처음 봤다. 어떤 이들은 나무에 아이오니아인의 영혼만 피어난 것이 아니라고 속삭였다. 녹서스인들이 죽어서까지 축제를 망치고 있다는 것이었다. 멀리서 들리는 까마귀 울음소리가 그것을 증명하는 듯했다. 파스코마는 그 말을 믿지 않았다. 그보다 훨씬 간단한 이유가 있었기 때문이다. 이번 축제에는 과거 어느 때보다도 돌아와야 할 영혼이 많아진 것뿐이다. 나무 위는 사랑하는 이를 만나려는 영혼들의 희망으로 무거웠다.
      <br><br>
      그러나 파스코마는 아직 오케레이를 찾지 못했다.
      <br><br>
      파스코마는 오케레이가 길을 잃은 것은 아닌지, 아직 평온을 찾지 못한 것은 아닌지, 단순히 자신과 말하고 싶지 않은 것인지 걱정했다. 어쩌면 떨어져 있던 세월이 너무 길어 둘 사이의 끈이 끊어진 것일지도 몰랐다.
      <br><br>
      파스코마는 금방이라도 쏟아질 듯한 눈물을 참고 웃으며 사토카에게 계속 찾아보자고 격려했다. 자신의 슬픔 때문에 손녀딸의 첫 번째 영혼의 꽃 축제를 망칠 수는 없었다. 이 축제는 기쁜 행사였다. 사토카에게도 사랑하는 이와의 재회가 얼마나 기쁜 일인지 알려 줘야만 했다.
      <br><br>
      투라시와 이투렌도 만찬 뒷정리를 마친 후 두 사람과 합류했다. "파-이르는 아직 못 찾았어요?" 투라시가 아름답게 색칠된 체체구아 가면을 쓰며 물었다. 가면의 뺨 부분에는 눈물 모양이 새겨져 있었다. 파스코마는 고개를 저었다. 목이 메어 말이 나오지 않았다. "그럼 저랑 사토카가 찾아볼게요. 잠깐 쉬시는 게 어때요?"
      <br><br>
      이투렌의 손에 이끌려 벤치에 앉은 파스코마는 주변을 둘러보았다. 영혼 차를 사이에 두고 마주 앉은 가족들이 사랑하는 이들에게 조금만 더 있다 가라고 애원하며 울고 있었다. 막대기를 검으로 삼아 전쟁놀이를 하는 아이들도 보였다. 그러나 장난스러워야 할 아이들의 표정은 진지했다. 축제 현장 이곳저곳에서 까마귀 소리를 들은 이들이 걱정하며 수군거리는 모습도 보였다. 그들은 불신과 경멸에 찬 표정으로 영혼 나무를 바라보았다.
      <br><br>
      파스코마가 기억하는 영혼의 꽃 축제는 이렇지 않았다. 축제가 다시 예전 모습을 되찾을 수 있을지 의문이었다.
      <br><br>
      멀리서 일정한 리듬으로 울리는 북소리가 들려오자 축제를 지켜보던 파스코마의 시선이 돌아갔다. 근처 산꼭대기에서 맹렬한 불길이 타오르고 있었다. 파스코마의 손이 가슴으로 향했다. 익숙한 소리였다. 치열한 전투가 끝난 후 녹서스인들이 거대한 장작더미 위에서 전사자를 불태울 때 들려오던 소리였다.
      <br><br>
      파스코마는 한숨을 쉬었다. "과거를 돌아보는 데 너무 많은 시간을 쏟지는 않았으면 좋겠어."
      <br><br>
      "그게 이 축제의 목적 아니었나?"
      <br><br>
      "아니." 파스코마는 불길을 등지고 나무를 바라보았다. "이 축제는 과거를 잊고 앞으로 나아가기 위한 거야. 많은 이들이 그 사실을 잊곤 하지." 파스코마는 보이지 않는 불의 열기가 자신을 휘감으며 자신과 가족, 주변의 모든 것, 과거와 미래까지 집어삼키려고 위협하는 듯한 느낌을 받았다. "이건 달라."
      <br><br>
      "어떻게 다른데?"
      <br><br>
      "이게 과거를 잊는 것 같아?" 파스코마는 슬픔에 가득 찬 목소리로 주변을 가리키며 물었다. "그보단 뭔가에 너무 매달려서 돌아올 수밖에 없도록 하는 것 같지 않아?"
      <br><br>
      따뜻한 손이 파스코마의 손을 감쌌다. 파스코마는 부드럽게 입을 여는 이투렌의 눈을 바라보았다.
      <br><br>
      "아직 오케레이의 꽃을 찾지 못해서 속상하구나."
      <br><br>
      눈물이 파스코마의 뺨을 타고 흘렀다. "난… 모든 게 달라. 영혼의 꽃이 돌아왔다고 해도 우리가 예전처럼 살아갈 수 있을까? 원래대로 돌아갈 수 있을까?"
      <br><br>
      이투렌이 파스코마의 손을 다정하게 쥐었다. "아직 시간이 있어. 오케레이는 찾을 수 있을 거야, 내 사랑. 당신과 오케레이의 심장을 잇는 끈은 내가 본 어떤 끈보다도 강해. 그와 이야기하면 절대 변하지 않는 것도 있다는 사실을 알게 될 거야. 당신이 언제까지나 오케레이를 사랑할 것처럼, 오케레이도 언제까지나 당신을 사랑할 테지. 그리고 그가 어떤 답을 하든…" 이투렌은 잠시 말을 멈추고 파스코마의 손바닥을 자신의 입술로 가져왔다. "그와 이야기를 하면 당신과 당신 가족의 마음은 편해지겠지. 난 그거면 돼."
      <br><br>
      오랫동안 사랑해 온 남자를 응시하던 파스코마의 딱딱한 미소가 부드럽게 풀렸다. 파스코마는 이투렌의 손을 꼭 마주 쥐었다. "'우리' 가족이야, 이투렌."
      <br><br>
      이투렌은 눈물이 나오기 전에 눈을 감고 파스코마의 손을 자신의 가슴 위에 갖다 대었다. 파스코마는 손가락 밑에서 안정적으로 두근거리는 이투렌의 강한 심장을 느낄 수 있었다.
      <br><br>
      파스코마는 처음으로 자신이 원하는 것을 깨달았다. 오케레이의 대답이 무엇인지는 상관없었다.
      <br><br>
      파스코마는 과거를 잊고 이투렌과 함께 앞으로 나아갈 준비가 되었다.
      <br><br>`;
    } else if (dropSelect.innerText == "完") {
      story_text.innerHTML = `  <span class="round">[8/8]</span>
      <br> 여섯 명의 녹서스인은 최대한 조용히 의식을 진행하려 했지만 녹서스 전사자들에게 경의를 표하려면 눈에 띌 수밖에 없었다. 이들은 아이오니아의 방식으로 죽은 자를 추모하기 위해 만 한가운데에 있는 작은 섬에서 찾아왔지만, 이번 주 초 웨흘레에서 열리는 영혼의 꽃 축제에 갔다가 외면을 받았다. 다른 추모 방법은 알지 못했던 이들은 결국 녹서스 전통대로 죽은 이들을 추모해야만 했다. 이곳으로 오며 많은 것을 가져오진 않았지만 추모식 준비는 어렵지 않았다.
      <br><br>
      로나는 늑대 북을 치고, 지오토와 샘다는 불을 지폈다. 헬리아와 아너트는 땅에 떨어진 나무와 끈으로 인형을 만들었다. 자크루트는 샘다가 사 온 축제 케이크를 석탄 속으로 던졌다. 시장에서 그런 일을 겪고도 아무렇지 않게 케이크를 먹을 수 있는 사람은 없었다. 결국 첫 번째 제물이 된 케이크는 불에 그을린 달콤한 향을 공기 중에 퍼뜨렸다. 그때 귀족 가문에서 자라 사제 교육을 받은 자크루트가 인상적인 동작으로 불 위에 인형을 던졌다.
      <br><br>
      "이 영혼들을 하늘로 보냅니다." 맑고 고요한 밤에 자크루트의 목소리가 울려 퍼졌다. "이들의 재가 전 세계에 흩날릴 수 있도록."
      <br><br>
      "이들의 죽음으로 녹서스가 바다 너머로 뻗어 나가길." 나머지가 중얼거렸다.
      <br><br>
      "이들의 몸을 양분으로 녹서스가 번영하길."
      <br><br>
      "이들의 죽음이 헛되지 않길."
      <br><br>
      "그리고 이들의 영혼이—"
      <br><br>
      자크루트는 갑작스레 말을 멈췄다. 순간 엄청난 돌풍이 불어와 불길이 하늘 높이 치솟았기 때문이다. 그 광경에 압도된 자크루트는 할 말을 잃고 말았다.
      <br><br>
      이것은 녹서스의 약속이었다. 길목에 있는 모든 것, 심지어 아군마저 불태워 버릴 불길이었다. 자크루트와 전우들은 전쟁이 끝나기도 전에 그 사실을 깨달았다. 그들은 모두 자신이 버린 자와 상처 입힌 자를 피해 자신만의 삶을 살아가려고 하는 탈영병이었다.
      <br><br>
      그들을 누구에게도 환영받지 못했다.
      <br><br>
      이곳은 녹서스가, 그들의 땅이 아니었다. 자크루트는 녹서스 신에게 자신들의 목소리가 닿을지 확신할 수 없었다. 자신이 목소리가 닿길 바라는지도 확신하지 못했다. 기도문은 알고 있었지만, 자신이 여전히 신을 믿는지 확신할 수 없었다.
      <br><br>
      영혼 나무에 핀 꽃이 빛났다. 마치 타오르는 불빛에 맞춰 요동치는 것 같았다. 자크루트는 침을 꿀꺽 삼켰다. 그래, 이곳은 녹서스가 아니었다. 그보다 아름답고, 위험하고, 무시무시한 곳이었다. 자크루트를 불안하게 하는 것은 전쟁이 터진 이래 처음 피었다는 저 꽃들이었다.
      <br><br>
      녹서스 신이 없다면 그들을 보고 있는 것은 아이오니아 영혼뿐이라는 뜻이었다. 자크루트와 전우들이 죽인 이들, 그들에게 분노와 원한 외에는 아무것도 느끼지 못할 이들이었다.
      <br><br>
      자크루트는 두 번 다시 그들과 싸울 일이 없기를 바랐다. 녹서스의 배와 병사들을 봤기 때문이다. 탈영병들은 그게 무엇을 의미하는지 알았다. 그러나 그것이 아이오니아에서의 삶과 녹서스인이라는 신분에 어떠한 영향을 미칠지는 알지 못했다.
      <br><br>
      "저들의 영혼이 조상들 사이에서 안식을 찾길." 자크루트의 목소리가 거칠게 갈라졌다. "그리고 다가올 전투에서 저들의 힘을 빌릴 수 있길."
      <br><br>
      자크루트는 영혼들이 자신의 기도를 듣지 않기를 바랐다.
      <br><br>`;
    }
  }

  activate(target.querySelector(".story--drop-menu"));
}

function init() {
  champList.addEventListener("click", champClickHandler);
  sideMenu.addEventListener("click", sideMenuHandler);
}

init();
