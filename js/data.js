const fshipLevel ={
  0: [0,1,2],
  1: [3,4,5],
  2: [6,7,8],
  3: [9,10,11],
  4: [12,13]
};

const qnaList = [
  {
    q: '1. 오늘 점심은 중식, <br> 10초 안에 고르기!',
    a: ['a. 짬뽕','b. 짜장','c. 못 골라']
  },
  {
    q: '2. 쉬는 날에는 당연히 ',
    a: ['a. 이불밖은 위험해, 집에 있을래','b. 시간아까워! 놀러나가야지']
  },
  {
    q: '3. 좋아하는 계절은',
    a: ['a. 봄','b. 여름','c. 가을','c. 겨울']
  },
  {
    q: '4. 여행을 떠나기 전에는',
    a: ['a. 야무지게 계획을 짠다','b. 어떻게든 되겠지~ 별 생각 없다']
  },
  {
    q: '5. 전생을 믿나요?',
    a: ['a. 아니? 인생은 단 한번 뿐이야','b. 인연은 돌고 돌아 또 만난다고 믿어']
  },

  {
    q: '6. 지금 이 순간 가장 중요한 것은?',
    a: ['a. 커리어','b. 사랑','c. 우정']
  },
  {
    q: '7. 가장 활동적인 시간은',
    a: ['a. 아침이지!','b. 저녁이다!']
  },
  {
    q: '8. 외계인은 있을까?',
    a: ['a. 있었으면 왜 지금까지 안 밝혀졌겠어?.','b. 분명 어딘가에 존재하고 있을거야!','c. 그런 생각은 다음에.. 먹고 살기도 바빠']
  },
  {
    q: '9. 처음 보는 사람이 <br>반갑게 이름을 부른다면,',
    a: ['a. 당황하지 않은 척 나도 인사한다','b. 놀란 얼굴로 "누구세요?" 묻는다','c. 기억력이 좋아서 못 알아볼 리가 없다']
  },
  {
    q: '10. 고된 여행길, <br>모르는 사람이 간식을 건넸을 때 ',
    a: ['a. 고맙다고 인사한 뒤 한 입 베어문다','b. 의심하다가 몰래 버린다','c. 뭐야.. 이 사람 나 좋아하나?']
  },
  {
    q: '11. 미용실에서 요청한 길이의 <br>두배를 싹둑 잘라버렸을 때 ',
    a: ['a. 이건 아니지! 따지고서 돈을 깎는다','b. 속상하지만 돈을 내고 집에 돌아와 운다']
  },
  {
    q: '12. 운명을 믿는가? ',
    a: ['a. 정해진 운명은 없어. 내가 개척해나가는거지','b. 이 세상엔 내가 어쩔 수 없는 흐름이 있어']
  },
  {
    q: '13. 사람들로부터 많이 듣는 칭찬은?',
    a: ['a. 다정하고 스윗한 배려쟁이','b. 엉뚱발랄 4차원사랑둥이','c. 담백하고 편안한 자연주의']
  }
]

const infoList = [
    {
      name: ' Lv1. 친해지길 바라..<br> 어색한 사이 ',
      desc: '아직은 멀뚱멀뚱, 만나도 할 얘기가 그리 많지 않은 사이. 하지만 언젠간 절친이 될 수 있을 것 같은 예감이 들어요. 안부가 궁금할 땐 카톡도 해보고, 프로필 뮤직이 괜찮으면 노래추천도 받으면서 조금씩 가까워져보는 건 어떨까요? 오답노트 필수!'
    },
    {
      name: ' Lv2. 가끔 봐도 반가운 좋은 친구 ',
      desc: '일거수일투족을 함께 하진 않지만, 가끔 만나도 어색하지 않은 두 사람이에요. 멀리 있어도 마음은 함께라지만 서로에 대해 조금 더 알아가는 노력이 필요해보여요. 자주 질문을 던지고 여유로울 때 산책도 하면서 친분을 유지하는 건 어떨까요?'
    },
    {
      name: ' Lv3. 서로 열심히 알아가는 중 ',
      desc: '서로에 대한 애정이 있어요. 늘 궁금하고 보고 싶고, 만나면 반가운 우리 사이. 조금만 더 노력한다면 ★아이유인나☆ 부럽지 않은 최고 절친이 될 수 있을 거에요. 그날까지 많이 대화하고 사이좋게 지내면서 우정 레벨업!!'
    },
    {
      name: ' Lv4. 언제든 연락할 수 있는<베스트 프렌드 ',
      desc: '누구보다 서로에게 솔직한 두 사람! 주변에서도 인정하는 베스트 프렌드에요. 힘든 일을 털어놓으면 언제든 달려나오는 두 사람은 인생에 없어선 안 될 서로의 필요충분조건! 앞으로도 따듯한 우정을 오래오래 유지해주세요!'
    },
    {
      name: ' Lv5. 눈빛만 봐도 알지!<br> 소울메이트 ',
      desc: '우리는 서로에 대해 모르는 게 없을 정도로 친밀한 사이에요. 두 사람의 우정은 안정기에 접어들어 그 누구도 의심하지 않습니다. 서로의 동반자로서, 그리고 반려인간으로서 평생 서로의 곁을 지키며 기쁜 일 슬픈 일에 함께 울고 웃으며 사이좋게 지내요!'
    },
]
