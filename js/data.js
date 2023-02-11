// 맞춘 문제 수에 따른 우정의 레벨
const fshipLevel ={
  0: [0,1,2],
  1: [3,4,5],
  2: [6,7,8],
  3: [9,10,11],
  4: [12,13]
};

// 질문(q), 대답(a) 데이터
const qnaList = [
  {
    q: '1. Today\'s lunch is Chinese, <br> Choose in 10 seconds!',
    a: ['a. Kung Pao Chicken','b. Chow Mein','c. Can\'t choose']
  },
  {
    q: '2. On my day off',
    a: ['a. I want to stay at home','b. I have to go out and have fun']
  },
  {
    q: '3. What\'s your favorite season',
    a: ['a. Spring','b. Summer','c. Autumn','c. Winter']
  },
  {
    q: '4. Before I go on a trip',
    a: ['a. I make a detailed plan','b. I don\'t plan much']
  },
  {
    q: '5. Would you betray your friend for a million dollars',
    a: ['a. Yes, obviously I would','b. No, I could never do that']
  },

  {
    q: '6. What is the most important thing right now?',
    a: ['a. Career','b. Love','c. Friendship']
  },
  {
    q: '7. The most active time',
    a: ['a. Morning!','b. Evening!']
  },
  {
    q: '8. Do you believe in aliens?',
    a: ['a. If there were, why haven\'t they been revealed yet?','b. They must exist somewhere!','c. I don\'t care either way']
  },
  {
    q: '9. Would you take a road trip with your friend?',
    a: ['a. Yes','b. No']
  },
  {
    q: '10. On a long journey,<br>When a stranger offers me snacks',
    a: ['a. Thank them and take a bite','b. Doubt and secretly throw away', 'c. Reject their offer']
  },
  {
    q: '11. Have you ever cheated in an exam?',
    a: ['a. No, it is never okay to cheat on an exam','b. Of course. It is always morally correct to cheat.']
  },
  {
    q: '12. Do you believe in fate?',
    a: ['a. There is no fixed fate. I\'m pioneering','b. There\'s a flow in this world that I can\'t change']
  },
  {
    q: '13. If someone you meet for the first time greets you by name',
    a: ['a. I greet them too','b. I ask them who they are','c. I have a good memory, there\'s no way I can\'t recognize them']
  },
]

// result 페이지에 들어갈 분석 정보
const infoList = [
    {
      name: ' Lv1. Met like 5 minutes or smth idk',
      desc: 'It\'s still far away, and there\'s not much to talk about. But I have a hunch that someday you can become best friends.'
    },
    {
      name: ' Lv2. Still getting to know each other',
      desc: 'Although you don\'t share your every move, you don\'t feel awkward even if you meet once in a while.'
    },
    {
      name: ' Lv3. A good friend who is fun to hang out with',
      desc: 'You help each other out and are always happy to meet. If you work a little harder you can become the best of friends!'
    },
    {
      name: ' Lv4. A best friend you can contact anytime ',
      desc: 'You are two people who are more honest with each other than anyone else! A warm friendship going a long time into the future.'
    },
    {
      name: ' Lv5. The ultimate friendship!',
      desc: 'You two stay by each other\'s sides, cry and laugh together in happy and sad times, and get along well.'
    },
]
