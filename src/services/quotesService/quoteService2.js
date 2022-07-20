export const getQuote = () =>
  fetch(process.env.REACT_APP_API).then((response) => response.json());

/*
0	1
0	Neji Hyuuga	The difference between stupidity and genius, is that genius has its limits.
1	Gaara	It's not because I'm lazy, it's just because I don't care.
2	Hatake Kakashi	A place where someone still thinks about you is a place you can call home.
3	Orochimaru	Regardless of our limitations, we can always be of some use. Our power may seem insignificant... but it may just prove to be useful in the grand scheme of things. Stay focused. Never avert your eyes, because if an opening arises, even our insignificant power may be enough to determine the fate of the world. Which is why everyone must stay alert and ready to strike at any moment!
4	Shimura Danzo	Emotion leads one to hate... and hate leads one to conflict and war.
5	Itachi Uchiha	Love is the reason why there is pain. When we lose someone precious to us, hate is born. Vengeance is the product of that hate and so death follows. But in death there is only more death. This will give rise to more pains. In this cursed world we live in, it is a cycle of hatred that will not cease. You and I seek the same thing that Jiraiya-sensei wanted. Let me ask you this: How will you confront this hatred in order to create peace?
6	Orochimaru	I could say I'm not sad, but I'd be lying. The problem is the world won't let me stay a kid forever, so I can't lie around crying about it either.
7	Sai	The best way to escape reality without running is smiling even if it is obviously fake.
8	Kimimaro	Lets see, how should I kill you?
9	Hatake Kakashi	I will show you my own move.
10	Haku	I'm sure that the boy I killed, who shared that skill, must also have grown up knowing the pain of which I speak. We are special. We are powerful. And we are feared.
11	Gaara	There are no enemies here because we've all suffered at Akatsuki's hand! So there is no Suna, no Iwa, no Konoha, no Kiri, and no Kumo! There are only "shinobi"!
12	Anko Mitarashi	*to Orochimaru* This is no time to reminisce, you're an S-class criminal, top of the most wanted list. You've got to be taken down, and it's only fitting that I'm the one to do it. 'Cause after all, you're the one that taught me everything, right, Sensei?
13	Shino Aburame	This is what a real trump card is.
14	Nara Shikamaru	You would think just this once, when it was life or death, I could pull through.
15	Tenten	I want to be a great and powerful ninja! To walk in the footsteps of the legendary kunoichi, Tsunade!
16	Zabuza Momochi	I can't think of a more fitting destination for a demon ninja, can you?! I'm told there are many demons down there - of all shapes and sizes! Oh yes, I should fit right in! You, on the other hand, Gatō... Well,I fear you're in for a long and very painful eternity!
17	Kankuro	Naruto... please save my little brother.
18	Kabuto Yakushi	*to Naruto* You've just thrown it all away! Dreams don't come true when you're dead!
19	Jiraiya	The true measure of a shinobi is not how he lives, but how he dies.
20	Neji Hyuuga	The curse represents a mark of the bird in a cage... It is... the symbol of being tied down to an inescapable destiny.
21	Hatake Kakashi	*to Pain* The people from this village are different from your average village. Even if it means dying, there's not a single one of us, who would sell out a comrade.
22	Sakura Haruno	*talking to Yamato* Same as always... I can only do the dumbest of things for Naruto...
23	Naruto Uzumaki	Hey, you stupid fox! You're in my body and you owe me rent! So for payment, I'll take your chakra! You got that?!
24	Hatake Kakashi	Because you're the only shinobi in the world who can surpass the Fourth. Thats what I believe.
25	Hatake Kakashi	To know what is right and choose to ignore it is the act of a coward.
26	Shino Aburame	Trying to improve by learning from others that is what calls friendship.
27	Itachi Uchiha	Those who forgive themselves, and are able to accept their true nature... They are the strong ones!
28	Rock Lee	Stop it! How dare you disrespect an opponent that fought you with all he had!?
29	Genma Shiranui	When captured birds grow wiser, they try to open the cage with their beaks. They don't give up, because they want to fly again.
30	Gaara	Just because someone is important to you, it doesn't necessarily mean that, that person is good. Even if you knew that person was evil... People cannot win against their loneliness.
31	Pain	Even the most ignorant, innocent child will eventually grow up as they learn what true pain is. It affects what they say, what they think… and they become real people.
32	Neji Hyuuga	Fear. That is what we live with. And we live it everyday. Only in death are we free of it.
33	Itachi Uchiha	Even the strongest of opponents always has a weakness.
34	Gaara	We have walked through the darkness of this world, that’s why we are able to see even a sliver of light.
35	Jiraiya	Rejection is a part of any man’s life. If you can’t accept and move past rejection, or at least use it as writing material - you’re not a real man.
36	Nara Shikamaru	It’s because we help out when they’re in trouble that we can count on them to come running when we need it.
37	Nagato	If you don't share someone's pain. You can never understand them.
38	Pain	Love breeds sacrifice... which in turn breeds hatred. Then you can know pain.
39	Sasuke Uchiha	Tears and rain, fall down on my face, my body is unable to stay yet my heart is unwilling to leave.
40	Tobirama Senju	Grown-ups are idiots. If they really want to bring an end to this endless fighting, they need to sit down with one another and reach a truce.
41	Hatake Kakashi	I've been around longer than you have, kid. And I've seen my share of troubles. You're not the only one who knows what it's like to lose somebody. It looks like neither of us has led a charming life, have we? Still, it's not that bad. At least you and I have been lucky enough to find new comrades to help fill the void.
42	Nara Shikamaru	Laziness is the mother of all bad habits. But ultimately she is a mother and we should respect her.
43	Hatake Kakashi	If comrades that you trust gather around you, hope can take physical form and become visible. That`s what I believe...
44	Naruto Uzumaki	Because they saved me from myself, they rescued me from my loneliness. They were the first to accept me for who I am. They're my friends.
45	Itachi Uchiha	Kabuto: Isn't acknowledging what you can't do the same as giving up?
46	Hatake Kakashi	Itachi: No, it means to forgive yourself for what you aren't able to do. Your comrades are there to make up for what you cannot do and to prevent you from ignoring things that you actually might have been able to do.
47	Itachi Uchiha	Once you question your own belief, it's over.
48	Haku	Forget about revenge. The fate of those who seek revenge is grim. It's tragic, You will end up suffering and hurting yourself even more. Even if you do succeed in getting revenge, the only thing that remains is emptiness.
49	Naruto Uzumaki	He who forgives and acknowledges himself... that is what it truly means to be strong!
50	Pain	It is only through the eyes of others that our lives have any meaning.
51	Ōnoki	Don't underestimate me! I don't quit and I don't run! You can act tough all you want! You're not gonna scare me off! No way! I don't care if I DO get stuck as a Genin for the rest of my life! I'll still be Hokage someday!
52	Itachi Uchiha	Just by living, people hurt others without even realizing it. So long as humanity exists, hate will also exist. There is no peace in this cursed world. War is just a crime paid for by the pain of the defeated...
53	Itachi Uchiha	Never give up without even trying. Do what you can, no matter how small the effect it may have!
54	Naruto Uzumaki	I'll admit that you're stronger than before. But because of that, you seem to have lost sight of what's truly important. Now listen carefully. The people of the village, who once abhorred you, have begun to admire you. They think of you as a comrade. It's because you fought hard for their acceptance. You once said it was everyone who cares about you who helped you get where you are now. If you forget others because you have power, and become arrogant and egotistical, you'll eventually become just like Madara. No matter how powerful you become, do not try to shoulder everything alone. Becoming the Hokage doesn't mean people will acknowledge you. But when the people acknowledge you, you can become Hokage. Never forget your friends!
55	Obito Uchiha	The ones who aren't able to acknowledge their own selves are bound to fail.
56	Madara Uchiha	People who continue to put their lives on the line to defend their faith become heroes and continue to exist on in legend.
57	Itachi Uchiha	No one cared who I was until I put on a mask.
58	Choji Akamichi	....Would you consider dying together "Teamwork" as well?
59	Gaara	People's lives don't end when they die. It ends when they lose faith.
60	Gaara	You can steal the very last bite of my very best food. You can mock me all you want. But if you insult my best friend, I will obliterate you.
61	Nara Shikamaru	Three times now... We've fought world wars for our own nations, our own villages. We've hurt one another. We've hated one another. That hatred bred a lust for power, and that lust for power created ME. I was a Jinchuuriki, the embodiment of hatred and power. And I hated this world, and all the people in it... I wanted to destroy it with my own hands. The exact same thing Akatsuki is trying to do today. But one man, one ninja from Konoha stopped me. I was his enemy, yet he wept for me! I hurt him, yet he called me his friend! He saved me! My enemy, my fellow Jinchuuriki... He suffered the same pain as me, yet bore no ill will! There are no enemies here because we've all suffered at Akatsuki's hand! SO THERE IS NO SAND, NO STONE, NO LEAF, NO MIST, NO CLOUD! THERE ARE ONLY SHINOBI! And if you still hold a grudge against the Sand, then when this war is over, come and take my head instead! Our enemies are after the friend who saved my life! If they take him, if we hand him over, our world is finished! I want to protect him, and I want to protect our world! But I'm too young to protect it all on my own! All of you lend me your aid!
62	Might Guy	Now there's something I understand a little better. Hate, sadness, even joy. To be able to share it with another person... Naruto Uzumaki. From fighting him I learned that. He knew pain like I did and then he taught me that you can change your path. I wish that one day I can be needed by someone. Not as a frightening weapon... But as the sand's Kazekage.
63	Gaara	Family? Let me tell you what kind of link I have with them. They are just lumps of meat linked by hatred and murderous intent!
64	Sasuke Uchiha	I understand now. Even if I must take the devil's fruit, I must gain power. I am an avenger.
65	Obito Uchiha	I'm no one. I don't want to be anyone. All I care about is completing the moon's eye plan. This world is completely worthless. There is nothing left in it but misery.
66	Orochimaru	Either people change or they die before they do. It's one or the other.
67	Kimimaro	Humans... Do humans have a purpose when they are born? I have been wondering recently. Because they are born, do they have an important duty? The meaning of being born... For humans to find that answer... It is the one freedom God gave them.
68	Sasuke Uchiha	I have told you before, I'm an avenger. I don't care about this test, Chunin or whatever. 'Am I strong?' that's the answer I want.
69	Itachi Uchiha	The village does have its dark side and its inconsistencies, but I'm still Konoha's Itachi Uchiha.
70	Madara Uchiha	Wake up to reality! Nothing ever goes as planned in this world. The longer you live, the more you realize that in this reality only pain, suffering and futility exist.
71	Tobi	It's too late to regret. Reality is just cruelly moving forward.
72	Madara Uchiha	Man seeks peace, yet at the same time yearning for war... Those are the two realms belonging solely to man. Thinking of peace whilst spilling blood is something that only humans could do. They're two sides of the same coin... to protect something... another must be sacrificed.
73	Pain	People are stupid. If I don't do this, there will be no peace. Eventually, time will pass and the pain will heal. Eventually, checkmate's power will weaken and people will begin fighting again. This time, they will use the weapon themselves and once more know true pain. And for the short time, peace will come again. It will give birth to short period of peace within this endless chain of hatred. That's my wish.
74	Pain	When you give up, your dreams and everything else, they're gone.
75	Madara Uchiha	Pain is the way to bring peace.
76	Jiraiya	Power is not will, it is the phenomenon of physically making things happen.
77	Naruto Uzumaki	Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because life's greatest lessons are learned through pain.
78	Hatake Kakashi	Don't improvise what you cannot handle.
79	Itachi Uchiha	Those who cannot acknowledge themselves, will eventually fail.
80	Orochimaru	Even children are forced to grow up in the face of pain.
81	Hatake Kakashi	It's human nature not to realize the true value of something, unless they lose it.
82	Madara Uchiha	In society, those who don't have many abilities, tend to complain more.
83	Naruto Uzumaki	Talking about peace whilst spilling blood, it's something that only humans can do.
84	Naruto Uzumaki	If you don't like the hand that fate's dealt you with, fight for a new one!
85	Jiraiya	The pain of being alone is completely out of this world, isn't it? I don't know why, but I understand your feelings so much, it actually hurts.
86	Hatake Kakashi	Getting dumped always makes a man stronger. But then again, men aren't meant to pursue happiness.
87	Rock Lee	The hole in one's heart gets filled by others around you. Friends won't flock to someone who abandons the memory of his friends and gives up on the world just because things don't go the way he wants them to. That won't help fill the hole in your heart. And people won't help those who run away and do nothing. As long as you don't give up, there will always be salvation.
88	Tobi	If you believe in your dreams, I will prove to you, that you can achieve your dreams just by working hard.
89	Naruto Uzumaki	Not one wish ever gets granted in this world.
90	Naruto Uzumaki	If you don't like your destiny, don't accept it. Instead, have the courage to change it the way you want it to be!
91	Nara Shikamaru	When people are protecting something truly special to them, they truly can become... as strong as they can be.
92	Itachi Uchiha	There's no advantage to hurrying through life.
93	Jiraiya	No single thing is perfect by itself. That's why we're born to attract other things to make up for what we lack. I think we start walking in the right direction only after we start getting our counterparts beside us.
94	Nara Shikamaru	Knowing what it feels to be in pain, is exactly why we try to be kind to others.
95	Ohnoki	It's stupid to talk about things you're not. Be yourself and you'll be fine.
96	Nara Shikamaru	It's because I've experienced pain in the past, that I can even consider what would be best for the future!
97	Sakura Haruno	Every one of us must do what's in their power! If we're going to die anyway, then it's better to die fighting than to do nothing!
98	Itachi Uchiha	Now I feel that maybe knowing who I actually am is the key to reach perfection. Because that means knowing what I can and cannot do.
99	Naruto Uzumaki	When people have different opinions, you should apply the majority vote.
100	Naruto Uzumaki	Failing doesn't give you a reason to give up as long as you believe.
101	Naruto Uzumaki	If the father's responsibility is to protect the child... then my responsibility is to exceed the father.
102	Sai	It's because Sakura loves Sasuke that she doesn't want him to sink any lower. It's because she loves him that she wants to rescue him from the evil path he currently walks. Even if the only way to do it is to kill him with her own two hands, I believe, she's prepared to do it because she loves him.
103	Neji Hyuuga	People share only one common fate... death.
104	Shikaku Nara	Legends from the distant past are always exaggerated, but eventually, someone outdoes them... that's when new legends are born!
105	Gamabunta	What's your wish? Peace? Money? Or the world? Whatever you wish for, it's something you have to get with your own strength!
106	Sakura Haruno	The things that are most important aren't written in books. You have to learn them by experiencing them yourself.
107	Nara Shikamaru	Someday, I just want to marry a regular girl who isn't too ugly and not too pretty. Have two children, first a girl, then a boy. Retire after my daughter is married and my son becomes a successful ninja, and spend the rest of my life playing shōgi or Go. Then die of old age before my wife.
108	Itachi Uchiha	Self-sacrifice... A nameless shinobi who protects peace within its shadow. That is a true shinobi.
109	Yashamaru	Love is... care and devotion you feel for the precious ones around you.
110	Hiruzen Sarutobi	It doesn't matter what you do, if you live and die as you like. However, no matter what road you end up taking, remember to protect the people that are precious to you.
111	Nara Shikamaru	In life, nothing good comes out of hurrying.
112	Jirobou	I don't know which is more pathetic; the fool, or those who follow him.
113	Sasori	What's the point of something that disappears as soon as it's born?
114	Sai	A smile is the best way to get oneself out of a tight spot, even if it is a fake one. Surprisingly enough, everyone takes it at face value.
115	Nagato	War brings death. And wounds and pain to both sides. There's nothing harder to accept, than the deaths of those you love. So you believe they could never die. Especially those who haven't known war.
116	Jiraiya	A person grows up when he's able to overcome hardships. Protection is important, but there are some things that a person must learn on his own.
117	Chouji Akimichi	True beauty lies in things that last forever, never rotting or fading.
118	Itachi Uchiha	People become stronger because they have things they cannot forget. That's what you call growth.
119	Hatake Kakashi	[talking about food] The last bite. It is the final one, and the most suitable one to enjoy the most. No matter what it costs, I will not give it up.
120	Might Guy	Peace under an illusion is not true peace. It's only meaningful if the real world manages to accomplish it.
121	Hatake Kakashi	My power isn't the Rasengan or Sage Jutsu or the Nine Tails chakra. My power is right here. [points to the center of his chest]
122	Gaara	It's never been "The one who becomes Hokage will be acknowledge by everyone", it's "The one who is acknowledge by everyone, becomes the Hokage".
123	Obito Uchiha	In the shinobi world, those that break the written and unwritten rules are deemed trash... but be that as it may... Those that would desregard their comrades so easily are even worse than trash. And those who don't have the decency to respect the memories of their comrades are the worst.
124	Jiraiya	If you want to be free from your suffering, make up your mind. If you give up on your dream, you will suffer more.
125	Itachi Uchiha	I really am... shinobi trash. But the one thing I still learned is this. That void is something that everyone helps you fill. Just because you face adversity and hardships, is no reason to give up on this world. A person willing to throw away all those memories... of their friends and comrades, will never find peace of mind. Resorting to something like that isn't going to bury that hole. If you persevere and endure, someone will be there to support you!
126	Madara Uchiha	In order to escape a road of solitude, one has to work hard, and forge a new path with their own power.
127	Pain	Somewhere inside of me?! Take a good look, there's nothing inside of me anymore!!! I don't feel pain, I don't feel anything! You need to let that guilt go Kakashi. This wind hole wasn't your doing... It was made by this evil, cruel world.
128	Gaara	Rejection makes a man stronger.
129	Zabuza Momochi	Teachings that do not speak of pain have no meaning, for humankind cannot gain anything in return.
130	Sakura Haruno	Nine-Tails, you are merely a momentary life, a temporary existence of coalesced energy... energy that once was a single, ultimate form! An unstable force, lacking in intelligence or sapience, you require a guide to show you purpose. That guide is the Uchiha! The tailed beasts are but slaves to those with blessed eyes. Obey!
131	Madara Uchiha	In this world, wherever there is light - there are also shadows. As long as the concept of winners exists, there must also be losers. The selfish desire of wanting to maintain peace causes wars, and hatred is born to protect love.
132	Orochimaru	Maybe, just maybe, there is no purpose in life... but if you linger a while longer in this world, you might discover something of value in it.
133	Orochimaru	True power is forged from the desire smoldering in the heart, it fans into a flame and begins to burn with an intensity one scarcely imagines to be possible...
134	Pain	We are but men, drawn to act in the name of revenge that we deem to be justice. But... if there is justice in revenge then that same justice will breed only more revenge... and trigger a cycle of hatred.
135	Hatake Kakashi	How can you say that you will never change? That you will not change, no matter how great the pain you face? Can you continue believing in yourself forever? Can you guarantee it? Can you have such faith in yourself?!
136	Naruto Uzumaki	Behind this mask is...Another mask! Pretty cool, huh?
137	Gaara	Listen to yourself whining and complaining like some sorry little victim! You can whimper all day for all I care, you're nothing but a coward!
138	Rock Lee	One day I'd like to become something precious to others.
139	Naruto Uzumaki	My motto is to be stronger than yesterday, if I have to I'll be stronger than half a day ago, even a minute ago!
140	Itachi Uchiha	While you're alive, you need a reason for your existence. Being unable to find one is the same as being dead.
141	Naruto Uzumaki	It is not wise to judge others based on your own preconceptions and by their appearances.
142	Pain	It's not the face that makes someone a monster, it's the choices they make with their lives.
143	Pain	You think you're the only ones who matter. You think you can put off death. But that peace made you foolish and thoughtless. If you kill someone, someone else will kill you... this hatred binds us together.
144	Nara Shikamaru	Do you understand pain a little now? If you don't share someone's pain, you can never understand them. But just because you understand them doesn't mean you can come to an agreement. That's the truth
145	Nara Shikamaru	*To Tayuya* How many times do I have to tell you? The first move is always a feint. It's the most basic thing, to land a hit with the second move.
146	Nara Shikamaru	*To Temari* It really doesn't matter to me if I ever become a chūnin or not, but I guess I shouldn't let myself be beaten by a female, so let's do it.
147	Naruto Uzumaki	*To himself, while fighting Temari* Oh man... those clouds are so lucky. so free. More to the point, I didn't feel like doing this in the first place. And I only became a ninja because I thought life would've been more interesting as one... I suppose things aren't gonna be that simple.
148	Nara Shikamaru	I'm the only one who can bear the full brunt of your hate! It's my job, no one else's! I'll bear the burden of your hatred... and we'll die together!
149	Neji Hyuuga	Hinata... this is the unalterable difference in strength... the distinction that separates the elite from the failure. This is the unchangeable reality. From the moment you said you wouldn't run, your defeat was inevitable. The only possible outcome was your present despair... Withdraw!
150	Orochimaru	[To Sarutobi] What nonsense! In the grand scheme of time, you're nothing more than a trivial footnote in the brief history of a cluster of huts called the "Leaf Village"! In time, the Hokage Stone Faces will crumble and be worn down to nothing...
151	Neji Hyuuga	[To Hinata At Chuunin Exams] So you're not going to withdraw? Then don't blame me for what happens to you.
152	Haku	{TO NARUTO} Oh, by the way... I'm a boy
153	Haku	Often people have it wrong, mistakenly believing... that showing mercy to an enemy is kindness. They spare the foe whose life is in their hands. But don't you see? It's an empty existence, to go on living... alone and unloved... when defeat's already cost you your dream!
154	Gaara	Bitter crimson tears flow from lifeless eyes, and mingle with the endless sands... Bestowing ever greater power upon the demon god.
155	Orochimaru	Darkness. When everything that you know and love is taken away from you so harshly. All you can think about is anger, hatred and even revenge. And no one can save you.
156	Nara Shikamaru	He turned a room full of strangers into a room full of enemies with just one sentence.
157	Itachi Uchiha	True Change cannot be made if it is bound by laws and limitations, predictions and imagination.
158	Naruto Uzumaki	If we fight again... We're both gonna die.
159	Tenten	The weaker you are the louder you bark.
160	Pain	Religion, ideology, resources, land, spite, love or just because. No matter how pathetic the reason, it's enough to start a war.
161	Pain	Human nature pursues strife.
162	Jiraiya	All the girls in Konoha are so hot these days.
163	Yashamaru	A wound of a heart is different from a flesh wound. Unlike a flesh wound, there are no ointments to heal it, and there are times when they never heal.
164	Pain	Justice comes from vengeance, but that justice only breeds more vengeance.
165	Itachi Uchiha	Any technique is worthless before my eyes.
166	Naruto Uzumaki	I will become a bigger badass than my father. And a stronger shinobi than my mother!
167	Naruto Uzumaki	To become Hokage is my dream!
168	Naruto Uzumaki	So shut up about "destiny" and...how people can't change! 'Cause... unlike me... you're not a "failure".
169	Naruto Uzumaki	Sasuke! Sasuke! Sasuke! What does he have that I don't have?!
170	Naruto Uzumaki	Sasuke, I always knew you were alone. In the beginning I was glad because I thought you were like me - I wanted to talk to you! But you... didn't speak. You always had everyone watching you. You could do everything and we were too different. So I decided that you would become my rival. I didn't want to lose because I was called a loser all the time. Even when we became Team 7, I still thought this way. I always tried to lie but... but the truth is... I always wanted to be like you. I aspired to be like you. Because of that... I was glad that you wanted to fight me.
171	Naruto Uzumaki	When I'm with Iruka-sensei, I think if that's what having a father is like... *to Sasuke* When I'm with you, I think if that's what having a brother is like.
172	Naruto Uzumaki	Sakura-chan, you sure do love Sasuke, don't you?
173	Might Guy	DYNAMIC ENTRY!
174	Kisame Hoshigaki	[after learning Guy Sensei's name. Might Guy] Yeah, mighty stupid looking guy!
175	Kisame Hoshigaki	Hmhmhmhm, I think I will play with you a bit before killing you!
176	Kisame Hoshigaki	Hmm... Itachi... it would be annoying if he moved around a lot. Perhaps we should cut off a leg or two?
177	Kisame Hoshigaki	I'll enjoy shaving you to death.
178	Kisame Hoshigaki	Konoha's Uchiha clan and the Mist's Seven Shinobi-gatana seem petty before his name.
179	Kimimaro	Against the power of will I posses... The capability of my body is nothing.
180	Kimimaro	[after Naruto does his Shadow Clone Jutsu] Oh, there sure is a lot of garbage scattered around here. But, trash is just trash after all. It simply needs to be cleaned up.
181	Kimimaro	I don't hate the darkness. It was IN the darkness that I was raised.
182	Kimimaro	I've been wondering... There must be a purpose for people being born into this world. Why are we here? What does it mean? I've been thinking about it a lot lately. I realized that finding our purpose IS the meaning. That's why we're here. And the ones who find it... They're the only ones who are truly free.
183	Kimimaro	*referring to Orochimaru* I am not his pawn..! He is the one, the only one who ever gave my life meaning!! But how could the likes of you EVER UNDERSTAND THAT?!?
184	Kimimaro	I will see the truth of this world... LORD OROCHIMARU WILL SHOW ME!!!
185	Kimimaro	I see...since I am no longer going to be Lord Orochimaru's vessel, my duty is to protect the vessel.
186	Kimimaro	You've only seen one of my dances.
187	Kimimaro	[to the Sound Ninja Four] Which do you prefer? To die, or to obey?
188	Kimimaro	Is there really a god? If there is one, why does he keep me confined in here?
189	Kimimaro	If Tayuya comes back, I'll kill her.
190	Kiba Inuzuka	Akamaru, what's wrong boy? Have you forgotten my scent? We've always been together haven't we? We grew up together. Akamaru please, somewhere in there, there has to be a part of you that remembers. Show me that you remember. AKAMARU! Forgive me. Can you? I know that I've brought you nothing but pain and suffering. I broke my word. I swore I'd always protect you. Akamaru I'm sorry. Sorry I wasn't a better master. I'm here. Here for you. Forever.
191	Kiba Inuzuka	I called you an idiot, idiot!
192	Kiba Inuzuka	It's not bad enough they buried us alive in the oversized dung heap, but now they're stealing our chakra. You gotta give these guys credit for thoroughness!
193	Kiba Inuzuka	A wall's a wall and there's no wall I can't punch a hole through!
194	Kiba Inuzuka	Hinata, untie the ropes before you faint.
195	Kiba Inuzuka	I must be a pretty pathetic owner for you to have bitten me, Akamaru....
196	Kankuro	A fair warning... we ninja of the Sand aren't as easygoing as those of the Leaf. But getting close to Kuroari so carelessly...isn't good!
197	Kankuro	[Thinking] What a sucker. He doesn't know I can re-establish control over my puppet within a blink of an eye. It's what makes me an expert puppet master. And so what if Crow's body is out of commission? I don't need his body. Every part of him is a lethal weapon. [To Shino] Looks like you underestimated me, bug boy. For the last time! There's enough poison on that to drop an elephant, so you're dead.
198	Kankuro	You tick me off. I hate short people anyway. And you're so impertinent for someone younger than me. It makes me want to break you.
199	Kankuro	But I want to play around before some noisy people come!
200	Hatake Kakashi	Gai...what I said earlier...I was out of line. I was being a self-righteous fool. I realize now that if I'd been in your shoes, I probably couldn't have stopped him, either.
201	Hatake Kakashi	I don't know what this boy means to you, Gai, but I shouldn't have to tell you that we never bring our personal feelings into play. I didn't think you were capable of it.
202	Hatake Kakashi	I've lived longer than you. And times have been bad. I know the pain of loss. You and I haven't really been fortunate. It's true. But it could be worse. For me, and for you, too... We've found good friends, haven't we? Because of your losses, you should understand.
203	Hatake Kakashi	Sorry I'm late. You wouldn't believe the traffic.
204	Hatake Kakashi	Sorry I'm late guys, a black cat crossed my path so I had to go the long way.
205	Hatake Kakashi	[thinking] If I'm still sane by the time I finish their training it'll be a miracle!
206	Hatake Kakashi	A ninja must see underneath the underneath.
207	Hatake Kakashi	Leaf Village Secret-Finger Justu...1,000 Years of Death!!! *sticks his fingers up Naruto's ass*
208	Hatake Kakashi	Hmmm...how do I put this? My first impression of this group...you're a bunch of idiots!
209	Kabuto Yakushi	[about the inefficacy of his attack against Tsunade] Did it not penetrate deep enough because of her fat breasts?
210	Kabuto Yakushi	The more you want something, the harder it is to wait for it.
211	Kabuto Yakushi	Mm, she's strong and scary. I bet she's single.
212	Iruka Umino	[About Naruto] Well that's typical. Not happy unless he's giving people a heart attack.
213	Iruka Umino	[when Naruto transforms into a woman in front of the whole class] CUT THE STUPID TRICKS! THIS IS YOUR LAST WARNING!!
214	Iruka Umino	[as a child] Why should I be sad?! My parents died protecting the village from the monster fox. They're heroes, and I'm the son of those heroes! If I cry, it's because I'm happy! I'm not even sad that they went and left me all alone...
215	Iruka Umino	I hate the fox, but the boy - I don't hate the boy.
216	Iruka Umino	It seems like the small leaves in the Village of Konoha have inherited that "will of fire" you spoke of, Third. The fire on the leaves will eventually burn greater and stronger... It will flash its light and protect this village.
217	Iruka Umino	When a person dies, he disappears, along with his past, current lifestyle, and his future. Many people die in missions and wars. They die easily and in surprisingly simple ways. Hayate was one of them. Those who die have goals and dreams. But everyone has something as important as those. Parents, siblings, friends, lovers... people who are important to you. They trust and help each other. The bond between the people important to you ever since birth and the string that binds them becomes thicker and stronger as time goes by... It's beyond reason. Those bound to you by that string will do that because it is important.
218	Ino Yamanaka	Billboard brow!!!
219	Ino Yamanaka	Oh, I'm sorry. Her head's so empty, so I mistook her for a vase and put flowers in her. You might want to spit that out quick, though. Those can be quite poisonous.
220	Ino Yamanaka	I believe you have the potential to bloom into something even more beautiful than the cosmos.
221	Haku	I am of no more use as his tool. Please, kill me.
222	Haku	Often people have it wrong, mistakenly believing...that showing mercy to an enemy is kindness. They spare the foe whose life is in their hands... But don't you see? It's an empty existence... to go on living... alone and unloved... when defeat's already cost you your dream!
223	Haku	Can you understand? Not having a dream... not being needed by anyone... The pain of merely being alive.
224	Haku	That is when I realized that in all of the world no one needed me. I was alone.
225	Haku	I want to make his dreams come true...
226	Haku	Is there... somebody precious to you?
227	Gaara	I took the life of the woman I was supposed to call mother in the process of being born... in order to become the world's strongest shinobi... I became the incarnation of sand...
228	Gaara	It's too bad I don't think of you as anything. If you get in my way... I'll kill you.
229	Gaara	BLOOOOOOOOOOOOOOOD!!! MY BLOOOOOOOOOOOOOD!!!
230	Gaara	You can make a rain of 1,000 needles. I will make it rain blood.
231	Gaara	People cannot win against their loneliness.
232	Chouji Akimichi	[When Ino visits him in the hospital] Hehe. I'm also the type that gets girls to visit him. Take that, Shikamaru!
233	Chouji Akimichi	I'm not fat, I'm pleasingly plump!
234	Chouji Akimichi	This punch is heavier than life itself!
235	Chouji Akimichi	Chubbies rule!
236	Anko Mitarashi	Time's a-wastin' people, let's go!
237	Itachi Uchiha	You're such a child. You talk of nothing but pipe dreams... there are times when people must make painful choices.
238	Temari	*about Shikamaru* Amazing. This slacker-clown outsmarted me!
239	Temari	Sharpen your kama at sunset.
240	Temari	*to Lee* Get yourself and that loser out of my way.
241	Temari	*to Shikamaru* You are awfully fragile. What kind of man are you?
242	Temari	Wasn't much of a match...kinda boring.
243	Gaara	He was the one who taught me to deepen my bond with my people. Thanks to him, I was able to regain my true self. That village has him, the one who cherishes a friend's bond more than anyone I know. Naruto Uzumaki... Knowing him and the friends he holds so dear, they will overcome this disaster and grow even stronger from it.
244	Gaara	This is where it all starts for me. Starting with this small bond. I too want to become someone who is needed, instead of a weapon that is feared. And as the Kazekage of Sunagakure.
245	Gaara	I know him well. He takes too many risks when it comes to his friends...that's why.
246	Gaara	*to Naruto* I think of you as a friend. I used to think "friend" was just another word... Nothing more, nothing less. But when I met you, I realized what was important was the word's meaning.
247	Gaara	*to Naruto* If you're truly prepared to take up the mantle of a Kage, then as Sasuke's friend, you know what you have to do.
248	Gaara	Peace under an illusion is not a true peace. It's only meaningful if the real world manages to accomplish it.
249	Gaara	When did you forsake yourselves?
250	Gaara	Up until now, my bonds with others have only been ones of hatred and murder. But, seeing him fight so hard made me wonder what a bond really is. I think I understand a little now. Suffering, sadness...and joy. To be able to share it with another person. Naruto Uzumaki...when I fought him, I feel that is what he taught me.
251	Gaara	Perhaps the companionship of an evil person is preferable to loneliness.
252	Gaara	You're the same then. When you feel the honor of your idol under scrutiny... you become enraged, as if it were your own honor being questioned. The more precious your idol is to you... the harder you fight for him.
253	Gaara	I shall kill you. I will not cease to exist.
254	Gaara	*to Sasuke* You have the same eyes as I do...the eyes, filled with hatred and death, that long for strength... Just like mine. Your eyes tell me how badly you wish to kill the one who put you through the hell called loneliness.
255	Gaara	I am a relic they want to get rid of, so why do I exist and live? In order to exist you need a purpose, to exist for no reason is the same as being dead... I would love only myself and fight for only myself. If all other people exist to magnify that love, then there is no more a splendid universe than this one...
256	Gaara	The corpse's bitter crimson tears flow and mingle with the endless sand, filling the chaos within me - and making me stronger.
257	Gaara	I finally understand... I'm alone. I won't believe in anyone, or love anyone. I'm alone.
258	Gaara	What does pain feel like?
259	Anko Mitarashi	I wasn't cast aside. It was my choice, and mine alone.
260	Anko Mitarashi	*to Orochimaru* But why? How could you do this!? I don't get it, I've looked up to you more than anyone in the world!
261	Anko Mitarashi	*about Sasuke* I don't care what the heck he is! If he stays, he's a danger to everyone! Don't you see!? As he gets stronger, so does the Curse Mark! That thing is feeding off his chakra! It's a Forbidden Jutsu that devours the one who bears it! It's incredible the kid's still standing. By now, he...should be dead.
262	Anko Mitarashi	*to Naruto* Tough guys like you usually leave their blood all over this forest.
263	Might Guy	He was a worthy opponent! A man who lived and died like a real shinobi! Kisame Hoshigaki! I'll remember that name for the rest of my life!
264	Might Guy	*to Kisame* A failure will win even at the cost of their own life!
265	Might Guy	That's it, Lee! Let the power of youth explode!!
266	Might Guy	When a man struts around like a peacock, acting like Mr. Big Stuff, he should keep his promises. Even if it kills him.
267	Might Guy	Gahh! Kakashi! You make me so mad! Why do you have to act so cool?!
268	Might Guy	You have the gift of perseverance, and that's what makes you a genius too!
269	Might Guy	Don't let anything stir you up the path you have drawn for yourself! Forge ahead in the end! Stick to it Lee! Make me proud! Be everything you can be!
270	Might Guy	You worked hard Lee, there's no doubt in my mind the surgery will be a success. You have the power to shape your own destiny. And on the one-in-one thousand, no, one in a million chance something to happen to go wrong, I will die right along with you. Since the day I met you, my nindō has been to train you to become the most splendid ninja possible. That's a promise!
271	Might Guy	*to Neji* I was a failure when I was your age, but now I can even beat Kakashi, the elite genius. It's only a matter of time until Lee finally surpasses you!
272	Might Guy	People call me the Leaf's Noble Gentleman!
273	Might Guy	That's it, Lee! Run...run towards the setting sun!... But don't mess up your hair!
274	Might Guy	Look deep into my eyes and accept my sincere apology! Also notice my handsome manly features.
275	Might Guy	*to Kakashi* What is with your attitude?! We'll never be young like this again!
276	Shino Aburame	I kind of hate him.
277	Shino Aburame	If you fight me, you won't be able to recover. Forfeit and withdraw.
278	Shino Aburame	Never underestimate your opponent, no matter how small they may seem.
279	Shino Aburame	Even if it's been a while, you should remember your comrades faces. Why? Because otherwise you will hurt their feelings when they call out to you.
280	Shino Aburame	I hate explaining the same thing twice.
281	Kiba Inuzuka	If I kick enough asses I might even end up Hokage!
282	Kiba Inuzuka	Let's die together.
283	Kiba Inuzuka	*to Naruto* You? Hokage? You can't even beat me! No-one's deluded enough to think that you have what it takes to become the next Hokage, not even you! Tell you what, though... I'll become Hokage in your place!
284	Kiba Inuzuka	Don't think you can run away from my nose.
285	Kiba Inuzuka	Heh, I don't know what's going on, but I'm always up for getting wild.
286	Kiba Inuzuka	Yahoo! Akamaru, let's do this!
287	Chouji Akimichi	I'm gonna eat until I can eat no more!
288	Chouji Akimichi	I can't forgive you for calling me fat! But even more than that... Not just for stealing the last chip... or calling me fat... most importantly I won't forgive anyone who insults my best friend!
289	Chouji Akimichi	Fat!? I'm big boned!
290	Chouji Akimichi	*to Shikamaru* I won't let even YOU eat the last barbecue chip!
291	Nara Shikamaru	My master entrusted me with a lot, from big things to little things. It's the same for you an unlimited number of things, don't you think it's about time for us, to be the ones who entrust not the entrusted, it's a pain in the ass but I can't say that. Someday you'll be the one to treat others to ramen and you'll be called Master Naruto... We can't stay kids forever, like Asuma and Jiraiya, I wanna be as cool as them.
292	Nara Shikamaru	*about Temari* Subtle as a rhino... she might even be scarier than my mom.
293	Nara Shikamaru	*about women, to his father* If women made you a better person, I wouldn't want to know what you were like before.
294	Nara Shikamaru	*about girls* C'mon. You know what they're like. You can never figure them out. You never know where you could stand with them. The smallest things could put you in their bad side. Always playing little mind games with you. Trying to make you do what they want. They're just a big pain basically.
295	Nara Shikamaru	When you have that kid, I'll have to protect it. So I've gotta grow up to be a cool adult too!
296	Nara Shikamaru	We're not stupid enough to go out there planning to die.
297	Nara Shikamaru	*to Hidan* That pathetic Lord Jashin or whatever isn't your God anymore. I am. The only one bringing down vengeance is me.
298	Nara Shikamaru	*to Hidan* See, you and I have different beliefs. I believe in the Will of Fire.
299	Nara Shikamaru	Ughh. Great. What's the point in setting the alarm if I'm going to wake up before it goes off? What a total waste. Now I've gotta shut it off but I don't feel like moving. But if I don't shut it off it will just keep ringing and ringing. Sigh. It makes me tired just thinking about the whole thing. Some mornings are such a drag...
300	Nara Shikamaru	How many times do I have to tell you? The first move is always a feint.
301	Nara Shikamaru	I never really liked Sasuke, but all the same, he's a member of the Hidden Leaf village, he's a comrade and I'll put my life on the line to help him, that's the way of our village. I know I usually seem like a pretty lazy guy, but not today. Because now, I'm responsible for your lives too.
302	Nara Shikamaru	Sometimes I wish I was just a cloud, floating along.
303	Nara Shikamaru	*about Ino* What a drag... I say a single thing against Sasuke, and I have to get that evil look from her eyes.
304	Ino Yamanaka	Who're you calling "pig", you billboard brow?!
305	Ino Yamanaka	*to Sakura* You bloomed into a beautiful flower.
306	Ino Yamanaka	*talking about Naruto* I could almost fall for him.
307	Rock Lee	Wise words, Guy sensei! So simple but filled with such profound meaning!
308	Rock Lee	The lotus of the Leaf Village blooms twice.
309	Rock Lee	I want to show I can be a splendid ninja as well even if I don't have ninjutsu or genjutsu... I want to prove it to the whole world!
310	Rock Lee	Sakura, please go out with me! I'll protect you with my life!
311	Rock Lee	A rock thrown at a pole will not hit, but if one does not aim at the pole, it will hit! That is the law I used!
312	Tenten	Amazing... The brilliance of the blade... the design. They're all beautiful! I want to take them all home!
313	Tenten	Three members of Team Guy specializes in Close-Contact battles so I often render aid from the distance. I don't mind providing back up, but I was hoping to find new ninja tools that would enable me to fight on the front lines.
314	Tenten	You're gonna fight Sasuke alone? And you think all of us are just gonna stand here and let you?!
315	Tenten	Let's just say I don't like being kept in the dark!
316	Tenten	I'm not running away and I'm not giving up. I will save this child.
317	Tenten	I won't let that happen. You're not getting off that easy. No way! The people you and Raiga killed, they all wanted to live but you didn't leave them that choice! You decided for them! Well you don't get to decide this time, ok?! You're gonna live and you're going to take some responsibility for all those people's lives you cut short!
318	Tenten	I can't stand weak and indecisive people!
319	Tenten	It's not because they're girls you know, Neji. It's just that those two are using kid gloves. It doesn't matter if you're a man or woman in battle.
320	Hiruzen Sarutobi	*last words* When the tree leaves dance, one shall find flames. The fire's shadow will illuminate the village, and once again, tree leaves shall bud anew.
321	Hiruzen Sarutobi	It is a place where every year shinobi are born, raised, grow old, fight, and die to protect their home. These people are precious to me. We share a home, we share a life, and though we may not share ties of blood, they are precious to me. They are my family. And if I do fall, you still will fail. I am only one of a long line. I carry this title in trust for those Hokage who came before and those who will come after. I am the Third Hokage!
322	Hiruzen Sarutobi	I wonder...do you have it, young as you are... the Will of Fire?
323	Hiruzen Sarutobi	He has combined Shadow Clone with his own invention, the Sexy Jutsu. What a foolish ninja technique...and he could probably get me with it, too.
324	Tsunade	I am the Fifth Hokage... You've trampled on our ancestors treasure...their dream...and you will pay the price! As the Hokage, I will put a stop to you here and now!
325	Tsunade	*talking to the advisers* People like Jiraiya...and Sarutobi, and Elder Chiyo of the Sand possessed something you two sorely lack. Do you know what that is!? ...Faith! My grandfather, the First Hokage, believed in you and entrusted you with the village. Now it's your turn to believe in these children and entrust it to them!
326	Tsunade	Grow up... Death comes with being a shinobi. There are times when death is hard to accept, but if you don't get over it, there's no future...
327	Tsunade	*to Orochimaru about Naruto* "I will die before I let you touch him!
328	Tsunade	Why am I putting my life on the line? Because now... I am the Fifth Hokage of the Village Hidden in the Leaves!
329	Tsunade	Jiraiya, are you the one who taught him the Rasengan? Are you acting like a teacher by teaching him something he can't master? Don't give him any ideas! That's why this kid likes to daydream that he's going to become Hokage someday.
330	Tsunade	*about to fight Naruto* One of the Legendary Sannin taking on a snot-nosed Genin... I oughta be ashamed of myself.
331	Kisame Hoshigaki	*last words* Itachi-san... It seems that in the end... I'm not so terrible after all.
332	Kisame Hoshigaki	I get stronger in direct proportion to how strong my opponent is. I do not tire, and cannot be defeated.
333	Kisame Hoshigaki	*to Asuma* My massive blade, Samehada, doesn't slice... It shreds to ribbons!
334	Kisame Hoshigaki	Sharks start out as eggs, but incubate and hatch in the womb. Sometimes the number of pups is less than the number of eggs that were fertilized. Do you know why? Cannibalism. The pups start eating each other within the mother's womb the moment they hatch. They start killing their siblings the moment they enter the world, viewing everything they see as nothing more than prey. As of today you and I are fellow members of Akatsuki. So be careful... of me.
335	Kisame Hoshigaki	I knew that from the first time I had to kill my comrades... Kill a Kiri ninja as a Kiri ninja. What does that make me? Am I a friend or foe? What is my purpose and my position? Where do I go? Where can I go? I'm well aware that my entire life has been a one giant lie.
336	Zabuza Momochi	*to Kakashi* I died as a human!
337	Zabuza Momochi	*last words* You were always at my side, the least I can do is to be beside you at the end. I know it cannot be, but I wish I could go to where you have gone. How I wish I could join you there, Haku.
338	Zabuza Momochi	Even the unremarkable Demon of the Hidden Mist can die and become a real Demon in hell!
339	Zabuza Momochi	Uh uh...I won't be joining Haku. Where he's gone I cannot follow. We wouldn't be welcome where Haku's gone to. Hell's where WE'RE going, Gatō!
340	Zabuza Momochi	Well? Cat got your tongue? Are you so surprised to discover that I'm human? Even shinobi are human. No matter how hard we try, we always fail to escape that simple fact. Well at least, I have failed.
341	Zabuza Momochi	*to Naruto* Your words cut deep, deeper than any blade.
342	Zabuza Momochi	When you've hovered between life and death so many times that it doesn't faze you, you may be called a ninja. When you've become so deadly that your profile has been entered into my bingo book, then you may have earned the title ninja.
343	Zabuza Momochi	You're right. Those little people and their little dreams, why should I care about them?! I have my own dream!
344	Zabuza Momochi	When I was your age, my hands were already soaked in blood...
345	Hinata Hyuuga	I used to always cry and give up... I made many wrong turns... But you... You helped me find the right path... I always chased after you... I wanted to catch up to you... I wanted to walk beside you all the time... I just wanted to be with you... You changed me! Your smile is what saved me! That is why I'm not afraid to die protecting you! Because... I love you...
346	Hinata Hyuuga	I won't let you lay another finger on Naruto!
347	Hinata Hyuuga	*to Naruto* You make mistakes... but... because of those mistakes... you get the strength to stand up to them. That's why I think you are truly strong.
348	Hinata Hyuuga	*to Naruto* When I watch you, I feel strong, like I can do anything - that even I am worth something.
349	Hinata Hyuuga	You're wrong, Neji... Because I can see that you are suffering more than me... You are the one who is confused and suffering inside the fate of the head and branch families.
350	Hinata Hyuuga	Was I able to change myself...even a little, N-Naruto-kun?
351	Hinata Hyuuga	I will never go back on my word, because that too is my ninja way!
352	Haku	By the way, I'm a boy.
353	Naruto Uzumaki	My name is Uzumaki Naruto. I like ramen. I hate the three minutes you have to wait while the water boils. And my dream is to one day become a Hokage. Then everyone will have to respect me at last.
354	Kankuro	Sasori...your strength came because of your soul, not in spite of it. You tried to erase it, to become a puppet yourself, but couldn't change completely. Now you've got your immortal body, but you've fallen, sunk to the level of the puppets you used to control. You were supposed to be a top class ninja puppeteer, not a worthless nobody who lets someone else pull the strings.
355	Kankuro	How well or poorly we execute our ambush will have a huge impact on this war and how many casualties we suffer. If you wanna protect your friends and family, the only thing you should be thinking about is how to make this operation a success!
356	Kankuro	*to Naruto* Aww, don't sweat it. Women always go weak in the knees for that cool, elite type of guy. So what can you do, am I right?
357	Kankuro	I'll show you the real power of the battle puppet Crow.
358	Kankuro	I can't back down when they show me no respect.
359	Kankuro	*thinking about Naruto* This brat...I'm going to kill him.
360	Itachi Uchiha	Growth occurs when one goes beyond one's limits. Realizing that is also part of training.
361	Itachi Uchiha	*last words* Forgive me Sasuke... It ends with this.
362	Itachi Uchiha	*to Kisame* Those who turn their hands against their comrades are sure to die a terrible death. Be prepared.
363	Itachi Uchiha	The people of this clan are all the same. You focus on the trivial, and lose sight of what's most important. Change is impossible, in this fog of ignorance. How can we evolve when regulation is all we know?
364	Itachi Uchiha	I've had enough, there's no hope left for this pathetic clan.
365	Itachi Uchiha	Don't cry, Sasuke. Your big brother is here to protect you, no matter what happens.
366	Itachi Uchiha	You and I are flesh and blood. I'm always going to be there for you, even if it's only as an obstacle for you to overcome. Even if you do hate me. That's what big brothers are for.
367	Obito Uchiha	*last words* Just when me and Kakashi were becoming friends... I couldn't bring myself to confess to Rin... I wish I had more time with everyone...
368	Obito Uchiha	*to Kakashi* I'm about to... die... but I'll become your eye.
369	Obito Uchiha	I believe the "White Fang" is a true hero!
370	Obito Uchiha	*to Kakashi* I am Uchiha Obito and I will surpass you once I awaken my Sharingan!
371	Sasuke Uchiha	I have already awakened.
372	Naruto Uzumaki	I don't understand what's going on, but I'll just pretend that I do. *nods head in agreement*
373	Kabuto Yakushi	*to Naruto* Finding a new me, that is the lesson you taught me.
374	Kabuto Yakushi	I decided I wished to be like you as well, Naruto-kun, and for that reason...with Orochimaru-sama now intregrated into this body, I plan on finding a new "me", one stronger than Orochimaru-sama himself!
375	Kabuto Yakushi	Hehehe...you can't beat me. You have no skills, unlike Sasuke.
376	Kabuto Yakushi	Little kids think life is so easy. That's why they go on and on about their dreams. That's why they never give up.
377	Kabuto Yakushi	Oh you look so beautiful... We're not here for a picnic you know.
378	Sasuke Uchiha	Don't worry, this will be over in five seconds.
379	Naruto Uzumaki	We're just some normal ninja, we don't want to see what's under your mask.
380	Iruka Umino	*to Naruto* Lord Jiraiya only had praise for you. He was always boasting about you, saying you were like his own grandchild. He had faith that you were the one who would inherit his will, and truly believed that you would one day be a great Hokage. Lord Jiraiya will always watch over you. Even this very minute, he's watching from somewhere. He wouldn't be happy seeing you sad like this. So...be your usual self, the one he praised so much. Don't stay depressed forever. For Lord Jiraiya himself, one of the Legendary Sannin...acknowledged you as his promising student!
381	Iruka Umino	So I acted like an idiot. It was tough, has it been lonely for you Naruto, was it tough Naruto??
382	Itachi Uchiha	We are humans, not fish. We don't know what kind of people we truly are until the moment before our deaths. As death comes to embrace you, you will realize what you are. That's what death is, don't you think?
383	Itachi Uchiha	You are weak. Why are you so weak? Because you lack... hatred.
384	Rock Lee	If I can't do 400 push-ups, I'll hit the dummy 800 times! If I can't hit the dummy 800 times, I'll do 2000 jump ropes!
385	Rock Lee	I am the Handsome Devil of the Hidden Leaf Village! My name is Rock Lee!
386	Rock Lee	Guy-sensei is the coolest! He practically GLOWS with cool!
387	Jiraiya	Stop calling me Ero-sennin!!
388	Jiraiya	Baka, baka, baka!! They found out I was peeking! Now my research is ruined!
389	Naruto Uzumaki	The only thing that can keep a fire from dying and give it more power, is wind.
390	Naruto Uzumaki	If I become as strong as you, will I really become like you? To die as a tool...that's...that's just too sad.
391	Jiraiya	*last words* The Tale of Naruto Uzumaki... yes... that has a nice ring to it.
392	Jiraiya	There, that ending...was a little better. The frog at the bottom of the well drifts off into the great ocean. Heh heh ...yep. Pretty damn honorable... pretty damn honorable...
393	Jiraiya	*to Naruto* I think we all have to acknowledge you. Gamatatsu, Gamakichi, Sakura, Tsunade...and I... We all admit you've worked really hard. But I wonder what's pushing you forward.
394	Jiraiya	Never go back on your word...and never give up. That's your ninja way...and as your mentor ... I have no business whining! Because the student's ninja way should be the master's too! Isn't that so, Naruto?!
395	Jiraiya	*to Orochimaru about Sasuke* Because it's no fun to train a genius!
396	Jiraiya	*to Orochimaru* You're wrong, that's not what makes a shinobi. You never did get it, a real ninja is one who endures no matter what gets thrown at him... Let me explain something to you, there is only one thing that matters if you are a shinobi, and it isn't the number of jutsu you possess. All you do need, is the guts to never give up.
397	Jiraiya	*to Naruto* Even I can tell that hatred is spreading. I wanted to do something about it...but I don't know what. I believe... that someday the day will come when people truly understand one another!! If I can't find the answer, it will be up to you to do it!!
398	Jiraiya	When people get hurt, they learn to hate... When people hurt others, they become hated and racked with guilt. But knowing that pain allows people to be kind. Pain allows people to grow... and how you grow is up to you.
399	Jiraiya	Wherever someone thinks of you, that's where home is.
400	Jiraiya	I'm not a pervert... I'm a super pervert!
401	Jiraiya	Die! Just Die! You have no talent at all!!
402	Jiraiya	Shut up you flat-chested bitch Tsunade!
403	Neji Hyuuga	You are the strongest enemy I have ever fought.
404	Neji Hyuuga	No one can determine another's destiny.
405	Neji Hyuuga	The heavens will not allow a pawn who can only seek victory at the cost of himself to advance...
406	Neji Hyuuga	*about Gai* He's so childish. He acts like a seven-year-old!
407	Neji Hyuuga	*about Lee and Gai* As usual, I can't keep up with their craziness.
408	Neji Hyuuga	Because Naruto... you saved me from the darkness.
409	Neji Hyuuga	All this time I've been called a genius, so I cannot lose.
410	Neji Hyuuga	Sasuke's out there right now, heading toward Orochimaru. We can't allow such evil to take someone from our village... that is not our way.
411	Neji Hyuuga	Naruto... Sometimes, your eyes are even better than mine.
412	Neji Hyuuga	Father, is a person's destiny a thing like a cloud flowing with an inescapable flow? Or can a person choose the flow he wishes... I still don't know the answer to this. Either way the destination may be the same in the end. However by choosing to live like the latter, a person can live and strive towards a goal. And in this match I have finally understood those who have that are truly strong. Father, I have but one goal, I want to become stronger... Enough not to lose to anyone... That's how I feel. Father, the birds are flying freely today... They look so happy.
413	Neji Hyuuga	There's no method but death to escape this horrible curse.
414	Neji Hyuuga	*to Naruto* These eyes of mine show me many things. One thing they've shown me...people's limitations are set, fixed, and unchangeable. Only a fool wastes his time trying to become something he can never be!
415	Neji Hyuuga	Do you understand now? You have no way of beating me!
416	Neji Hyuuga	Once a failure, always a failure. You can't change that.
417	Neji Hyuuga	Right now, Sasuke is in the darkness. The only one who can save him is you, Naruto.
418	Naruto Uzumaki	Try it trash! I'll return the pain a thousand times over!
419	Jiraiya	I am, Jiraiya, the epitome of manliness! I shall fall for no woman's wiles! When you're me, you only need to flash that sexiness to have women fall at your feet.
420	Ino Yamanaka	WHAT?! Why wasn't he affected by my sexiness?!
421	Ino Yamanaka	SHIKAMARU! Beat her up with a 16 HIT COMBO!
422	Ino Yamanaka	There's no meaning to a flower unless it blooms.
423	Gaara	A soul needs a purpose to live...and so I concluded that my purpose was to kill everyone besides myself. I felt alive...
424	Gaara	I fight for my sake only and live to love no one but myself.
425	Gaara	*young Gaara attempts to slash his wrist* It's no use, the sand gets in the way.
426	Madara Uchiha	The concept of hope is nothing more than giving up. A word that holds no true meaning.
427	Madara Uchiha	The Uchiha is a clan destined for revenge...
428	Madara Uchiha	*to Minato, about his reason for attacking Konoha* Oh, you know...it's fun, it's part of my plan...to start a war...to bring peace...
429	Madara Uchiha	It will be a new world... A world of truth, not lies.
430	Madara Uchiha	When a man learns to love, he must bear the risk of hatred.
431	Hatake Kakashi	*to Sasuke* No matter how far Orochimaru fell, he still loved him... Now I know how the Third Hokage felt.
432	Hatake Kakashi	*to Sakumo* Regardless of what happened, you did the best you could. I understand that now...you broke the rules for all our sakes - I'm proud of you now...
433	Hatake Kakashi	*to Naruto* You've become as strong...if not stronger than me.
434	Hatake Kakashi	Like the fate of the two who founded the village of Konoha... Naruto and Sasuke...your fates are like theirs.
435	Hatake Kakashi	This place makes me think about the mistakes I've made in the past... and I've made a lot.
436	Hatake Kakashi	*to Orochimaru* I don't care if you are one of the legendary Sannin, the great shinobi of legend, I swear take one more step towards Sasuke and one of us will die here!
437	Hatake Kakashi	I'm Kakashi Hatake. Things I like and things I hate...I don't feel like telling you that. My dreams for the future...never really thought about it. As for my hobbies...I have lots of hobbies.
438	Rock Lee	A genius, huh? What does that mean? "Genius"? So I was not born with a whole lot of natural talent, not gifted like Neji ...but I work hard and I never give up! That is my gift, that is my ninja way!
439	Orochimaru	*to Sasuke* I refuse...to let this happen! I am Orochimaru! I am immortal! I will not die here! Destined to discover the true meaning behind everything! Destined to take control of everything in this world!!
440	Orochimaru	When there is a true desire in the heart and that desire is strong... That is when he finds real strength that even he did not know he had!
441	Orochimaru	Everything will be mine.
442	Orochimaru	*about Sasuke* When I watch this boy, I look back to the time I was called a genius, and think how ridiculous it was.
443	Orochimaru	*to Sasuke* How impressive. A thousand foes stand before you and you don't even bat an eyelid.
444	Orochimaru	*talking about Naruto* This child... intrigues me to no end!
445	Orochimaru	Hate only gives birth to even more hate.
446	Orochimaru	I want to obtain all the jutsu and gain a true understanding of everything in this world. The first one to mix blue and yellow called the new color "green". I want to do something similar to that. If blue is the chakra, then yellow is the seal, and green is the jutsu... Just as there is no end to the variety of colors, there are so many thousands...tens of thousands of jutsu in the world as well. But in order to obtain every possible jutsu and truth, it would require an eternity. Only one who understands everything after spending such time on this can be fittingly called the Ultimate Being.
447	Orochimaru	*to Kabuto, talking about Tsunade) The best medicines always taste bitter.
448	Orochimaru	There probably isn't any meaning in life. Perhaps you can find something interesting to do while you are alive. Like how you found that flower. Like how I found you.
449	Sakura Haruno	Naruto's here because he's made up his mind. My resolve is nothing compared to his now! I'm supposed to be a ninja, but all I've ever done is lean on him and cry... I was supposed to change that... I came here and I thought I was ready. But I can't do anything... I can't say anything. The only thing that remains for me...is to believe in them!
450	Sakura Haruno	*about killing Sasuke* I... Sasuke... I... I thought I could do this...
451	Sakura Haruno	I'm the one who made Naruto suffer the most... I've just been getting it wrong. Just been messing it up... I don't want to get it wrong anymore...don't want to screw it up anymore.
452	Sakura Haruno	A smile is the easiest way out of a difficult situation.
453	Sakura Haruno	*to Sasuke* I... I love you with all my heart!.. If you were to stay here with me, there would be no regrets...because every day we'd do something fun, we'd be happy I swear..! I would do anything for you! So...please, just stay with me!
454	Sakura Haruno	I've always considered myself to be a true ninja...but those were just empty words, because Sasuke and Naruto were always in the lead! But now it's my turn to take the lead, and all of you can watch me from the background!
455	Sakura Haruno	*to Ino* Didn't you know? Women have to be strong in order to survive!
456	Sakura Haruno	All I've been doing is watching you two from behind... Now, get a good look at MY back!
457	Sakura Haruno	*talking to Sasuke* On that day, you taught me that solitude is painful! I understand that so well right now. I have family, and I have friends but if you're gone... To me... It will be the same as being alone.
458	Hatake Kakashi	In the ninja world, those who break the rules are scum, that's true, but those who abandon their friends are worse than scum.
459	Hatake Kakashi	I won't allow my comrades to die. I'll protect you with my life. Trust me.
460	Hatake Kakashi	The next generation will always surpass the previous one. It's one of the never-ending cycles in life.
461	Hatake Kakashi	*making excuses for being late, as usual* Hello students, today I got lost on the road of life.
462	Hatake Kakashi	*making excuses for being late, as usual* A cute girl stopped me on the way, so I danced.
463	Hatake Kakashi	Naruto, it's nice that you removed the poison so spiritedly, but you'll bleed to death if you lose any more blood... Seriously...
464	Itachi Uchiha	People live their lives bound by what they accept as correct and true. That's how they define "reality". But what does it mean to be "correct" or "true"? Merely vague concepts... Their "reality" may all be a mirage. Can we consider them to simply be living in their own world, shaped by their beliefs?
465	Itachi Uchiha	If you want to kill me, despise me, hate me, and live in an unsightly way... Run, and cling to life, and then some day, when you have the same eyes as I do, come before me.
466	Itachi Uchiha	You aren't even worth killing, foolish little brother.
467	Sasuke Uchiha	If you think I'm just a foolish kid ruled by his emotions, that's fine. Following Itachi's path would be childish, the whispering of fools who don't know hatred. If anyone else tries to ridicule the way I live, I'll slaughter everyone they ever cared about. And then maybe they'll understand what it's like to taste... a little of my hatred.
468	Sasuke Uchiha	*Talking to Naruto* Just shut up for once! What the hell do you know about it?! It's not like you ever had a family in the first place! You were on your own right from the beginning, what makes you think you know anything about it?! Huh?! I'm suffering now because I had those ties, how on earth could you possibly understand, what it feels like to lose all that?!
469	Sasuke Uchiha	*Introducing himself to Kakashi, Naruto and Sakura* My name is Sasuke Uchiha. I hate a lot of things, and I don't particularly like anything. What I have is not a dream, because I will make it a reality. I'm going to restore my clan, and kill a certain someone.
470	Sasuke Uchiha	I have long since closed my eyes... My only goal is in the darkness.
471	Naruto Uzumaki	The pain of being alone...is not an easy one to bear. Why is it...that I can understand your pain? But...I already have many people who are important to me now...and I can't let you hurt any of them. Even if I have to kill you!
472	Naruto Uzumaki	I won't run away anymore... I won't go back on my word... That is my ninja way!
473	Sasuke Uchiha	You're such a loser, Naruto.
474	Sasuke Uchiha	Are you alright, crybaby?
475	Sasuke Uchiha	Naruto... I know you're special but, I AM MORE SPECIAL THAN YOU!
476	Deidara	Shut up! I killed Sasuke Uchiha! And you're next, you art-hating sack of wrinkles!
477	Deidara	*Before killing the Suna guards* Look at those fools. They have no appreciation for art. You have to feel art. And true art... is an EXPLOSION!
478	Deidara	Art is a BANG!
479	Hidan	Kakuzu... Could you get me my body, pleeease?
480	Sakura Haruno	Inu pig!
481	Nara Shikamaru	Man... What a drag...
482	Hatake Kakashi	I'm telling you this because you don't get it. You think you get it, which is not the same as actually getting it. Get it?
483	Nara Shikamaru	How troublesome...
484	Naruto Uzumaki	A true hero always arrives late.
485	Naruto Uzumaki	If he rips my arms off, I'll kick him to death. If he rips my legs off, I'll bite him to death! If he rips my head off, I'll stare him to death! And if he gouges out my eyes, I'll curse him from beyond the grave..!
486	Naruto Uzumaki	I am strong because I have people to protect.
487	Itachi Uchiha	Foolish brother, if you wish to kill me - hate me, detest me, and survive in an unsightly way. Run... run and cling to life.
488	Obito Uchiha	In the ninja world, those who don't follow the rules are trash. But, those who abandon their friends are even worse than trash.
489	Naruto Uzumaki	And my dream is to be the greatest Hokage! That way, people will stop disrespecting me and start treating me like I'm somebody. Someone important!
490	Haku	When people are protecting something truly precious to them. They truly can become...as strong as they need to be!
491	Gaara	Not enough... blood.
492	Naruto Uzumaki	BELIEVE IT!!
493	Gaara	I want to be needed, this is what I've learned from meeting and fighting Uzumaki Naruto.
494	Rock Lee	A dropout will beat a genius through hard work.
495	Madara Uchiha	Love is not necessary, power is the only true necessity.
496	Itachi Uchiha	I actually don't think something like perfection exists. That is I think why we are born able to absorb things... and by comparing ourselves with something else we can finally head in a good direction.
497	Hagoromo Ōtsutsuki	The past does not exist to remind us that the future cannot be changed. It exists to remind us what the future can be.
498	Naruto Uzumaki	There is no telling what kind of pain will come after me, but... if I stop believing because of that, if the hero should change, it'll turn into another story from the one my master left behind. Then it wont be Naruto! I can't write novels like my master did. That's why the sequel has to come from the life I live no matter how great the pain, I'll continue walking because that's who Naruto is!
499	Sai	Even if I force myself to smile. It seems I'm the type of person who ends up being hated.
500	Itachi Uchiha	In this moment, I am euphoric. Not because of any phony Shinobi's blessing. But because, I'm enlightened by my intelligence.
501	Itachi Uchiha	Knowledge and awareness are vague, and perhaps better called illusions. Everyone lives within their own subjective interpretation.
502	Pain	Learn to embrace the fear of feeling about what it's like to contemplate what it is to know true pain. Because when I had nothing and no one - I always had Pain.
503	Sasuke Uchiha	(About Sakura) Was she having fun in her little make-believe fantasy of true love? As for me, I have absolutely no reason to love her and likewise, I can see no reason why she would love me.
504	Madara Uchiha	The longer you live... The more you realize that reality is just made of pain, suffering and emptiness...
505	Madara Uchiha	It seems that you still want to dance but... You will not be able to make steps anymore.
506	Madara Uchiha	I'd be lying if I said things are going according to my plan... but beggars can't be choosers, right?
507	Madara Uchiha	[Last words to Hashirama] As comrades, huh... well... if that's how... we... will.... *smiles*
508	Pain	Feel pain, think about pain, accept pain, know pain... Shinra Tensei!*/