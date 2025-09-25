export interface BulletinSection {
  id: string
  type: string
  title: string
  [key: string]: any
}

export const bulletinData = {
  churchName: "UKIAH UNITED METHODIST CHURCH",
  motto: "Love God • Live Compassion",
  date: "September 28, 2025",
  theme: "Changemakers",
  contactInfo: {
    address: "270 N. Pine St. (Mailing: P.O. Box 323), Ukiah, CA 95482",
    website: "www.ukiahumc.org",
    wifi: {
      network: "UUMC Friends",
      password: "lovewins"
    },
    staff: [
      {
        name: "Rev. Dr. Michele Robbins",
        title: "Pastor",
        phone: "707.462.3360 x12",
        email: "pastor@ukiahumc.org"
      },
      {
        title: "Soul Purpose Band Director",
        email: "soulpurposeband@ukiahumc.org"
      },
      {
        title: "Church Office",
        phone: "707.462.3360",
        email: "office@ukiahumc.org"
      }
    ]
  },
  instructions: "The words in black bold are spoken or sung by the congregation. Please, no food or beverages are allowed in the Sanctuary. * Indicates when to rise in body or spirit.",
  hymnalKey: "UMH--United Methodist (Blue),   TFWS--The Faith We Sing (Black),   W&S--Worship & Song (Green)",
  serviceOrder: [
    {
      id: "prelude",
      type: "hymn",
      title: "Prelude",
      hymnTitle: "In the Midst of New Dimensions",
      number: "#2238",
      source: "TFWS"
    },
    {
      id: "welcome",
      type: "sectionTitle",
      title: "Welcome"
    },
    {
      id: "threshold-moment",
      type: "thresholdMoment",
      title: "Threshold Moment",
      content: [
        {
          speaker: "P",
          text: "The first thing Jesus did, in every version of the story we have about him, was to go out and find other people to come with him. Twelve disciples, called right from the beginning—not to worship Jesus or to promote his reputation, but to walk right beside him, to learn everything he knew, to do the same things he did. He sent them out, early and often, to practice healing and teaching, just like he was doing. They didn't always get it right. Sometimes they got busy, or distracted, or afraid. Often, they forgot the instructions."
        }
      ]
    },
    {
      id: "dreams-poem",
      type: "embeddedPoem",
      title: "",
      content: [
        "In my dreams I can fly",
        "and I soar",
        "and my feet touch the sky",
        "and it seems I can go anywhere if I try",
        "and the world's not so dark",
        "when the clouds make it white",
        "If there's no hope tell me why",
        "in my dreams I can fly"
      ]
    },
    {
      id: "threshold-continued",
      type: "thresholdMoment",
      title: "",
      content: [
        {
          speaker: "P",
          text: "Jesus didn't do this work alone and you can't, either. The key thing Jesus did when starting ministry was to gather a group of people, a team of disciples. He didn't do it alone but in collaboration. Partnerships and joining others are essential parts of changemaking. Like the African proverb: \"If you want to go fast, do it alone. If you want to go far, do it together.\""
        }
      ]
    },
    {
      id: "dreams-poem-repeat",
      type: "embeddedPoem",
      title: "",
      content: [
        "In my dreams I can fly",
        "and I soar",
        "and my feet touch the sky",
        "and it seems I can go anywhere if I try",
        "and the world's not so dark",
        "when the clouds make it white",
        "If there's no hope tell me why",
        "in my dreams I can fly"
      ]
    },
    {
      id: "call-to-worship",
      type: "responsiveReading",
      title: "Call to Worship",
      content: [
        {
          speaker: "L",
          text: "The world needs to change, and that can make us want to go to our room and hide. Because there is so much that needs to be done.",
          isCongregation: false
        },
        {
          speaker: "All",
          text: "Pain needs to be acknowledged.",
          isCongregation: true
        },
        {
          speaker: "L",
          text: "Reparations must be made. Justice must be done. That feels like a lot. And so, we must remember that we are not called to be changemakers on our own.",
          isCongregation: false
        },
        {
          speaker: "All",
          text: "We are called together.",
          isCongregation: true
        },
        {
          speaker: "L",
          text: "We are called in community, and we are called alongside people of faith and goodwill around the world. The world needs to change, but we will not change it alone.",
          isCongregation: false
        },
        {
          speaker: "All",
          text: "We are called together, and vested with the power of the Holy Spirit.",
          isCongregation: true
        },
        {
          speaker: "L",
          text: "We are called to follow the way of Jesus. We are the changemakers, and we are getting ready!",
          isCongregation: false
        },
        {
          speaker: "All",
          text: "May we be changed by this time of worship!",
          isCongregation: true
        }
      ]
    },
    {
      id: "passing-peace",
      type: "thresholdMoment",
      title: "Passing the Peace",
      content: [
        {
          speaker: "Pastor",
          text: "The Peace of Christ be with you."
        },
        {
          speaker: "All",
          text: "And also with you."
        },
        {
          speaker: "Pastor",
          text: "You are invited to pass the peace among you, remembering to pass it to those joining us remotely."
        }
      ]
    },
    {
      id: "praising",
      type: "songLyrics",
      title: "Praising",
      songTitle: "If We Are the Body",
      artist: "Casting Crowns",
      lyrics: [
        "It's crowded in worship today    As she slips in trying to fade into the faces",
        "The girl's teasing laughter is carrying farther than they know    Farther than they know",
        "",
        "(Chorus)",
        "But if we are the body    Why aren't His arms reaching?",
        "Why aren't His hands healing?    Why aren't His words teaching?",
        "And if we are the body    Why aren't His feet going?",
        "Why is His love not showing them there is a way?    There is a way",
        "",
        "A traveler is far away from home    He sheds His coat and quietly sinks into the back row",
        "The weight of their judgmental glances    Tells him that His chances are better out on the road",
        "",
        "(Chorus)",
        "",
        "Jesus paid much too high a price    For us to pick and choose who should come",
        "And we are the body of Christ",
        "",
        "(Chorus) 2x",
        "",
        "Jesus is the way"
      ]
    },
    {
      id: "young-at-heart",
      type: "sectionTitle",
      title: "Young & Young at Heart Time"
    },
    {
      id: "reception-new-members",
      type: "thresholdMoment",
      title: "Reception of New Members",
      content: [
        {
          speaker: "Pastor",
          text: "It is the mission of the United Methodist Church to make disciples of Jesus Christ for the transformation of the world. Today we have friends who have decided they would like to join us in our mission."
        },
        {
          speaker: "Lay Leader",
          text: "I present (Names) who desire to enter into the fellowship of this congregation."
        },
        {
          speaker: "Pastor",
          text: "Will you accept the freedom God gives us to resist evil, injustice, and oppression in whatever forms they present themselves."
        },
        {
          speaker: "New Members",
          text: "I will."
        },
        {
          speaker: "Pastor",
          text: "Will you follow the Way of Jesus for the transformation of the world?"
        },
        {
          speaker: "New Members",
          text: "I will."
        },
        {
          speaker: "Pastor",
          text: "As a member of this congregation, will you faithfully participate in its ministries by your prayers, your presence, your gifts, your service and your witness?"
        },
        {
          speaker: "New Members",
          text: "I will."
        },
        {
          speaker: "Pastor",
          text: "Members I commend these siblings to your love and care. Do all in your power to increase their faith, confirm their hope, and perfect them in love."
        },
        {
          speaker: "All",
          text: "We give thanks for all that God has already given you and we welcome you in love. As members together with you in the Body of Christ and in this congregation of The United Methodist Church, we renew our covenant to faithfully participate in the ministries of the Church by our prayers, our presence, our gifts, our service, and our witness, that in everything Divine Love may be glorified through the love of this community."
        },
        {
          speaker: "Pastor",
          text: "It is our joy to welcome you in a spirit of Love."
        }
      ]
    },
    {
      id: "contemporary-reading",
      type: "contemporaryReading",
      title: "Contemporary Reading",
      subtitle: "excerpt from \"The Shalom Zone Litany\"",
      content: [
        "\"Out of the fires of destruction, the ashes of despair, and the chaos of these times",
        "will rise new communities of faith and hope,",
        "new communities of courage and daring,",
        "resurrected communities of God's Shalom.\""
      ]
    },
    {
      id: "lords-prayer",
      type: "lordsPrayer",
      title: "Community Prayer  ~  The Lord's Prayer",
      subtitle: "Sung in Echo",
      content: [
        "Our Mother, Father, Our Mother, Father",
        "Who art in heaven, Who art in heaven",
        "Hallowed be thy name, Hallowed be thy name",
        "Thy Kingdom come, Thy Kingdom come",
        "Thy will be done, Thy will be done",
        "On earth as it is in heaven, On earth as it is in heaven",
        "Give us this day, Give us this day",
        "Our daily bread, Our daily bread",
        "And forgive us all our sins, And forgive us all our sins",
        "And lead us not, And lead us not",
        "In temptation, In temptation",
        "But deliver us from evil, But deliver us from evil",
        "For yours is the Kingdom and the power and the glory",
        "Forever, Forever",
        "And ever, And ever",
        "Our Mother, Father, Our Mother, Father",
        "Who art in heaven, Who art in heaven",
        "Hallowed be thy name, Hallowed be thy name"
      ]
    },
    {
      id: "ancient-readings",
      type: "sectionTitle",
      title: "Ancient Readings",
      subtitle: "NRSVUE"
    },
    {
      id: "jeremiah-reading",
      type: "scriptureReading",
      title: "",
      reference: "Jeremiah 29:7",
      version: "",
      content: [
        "But seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf, for in its welfare you will find your welfare."
      ]
    },
    {
      id: "mark-reading",
      type: "scriptureReading",
      title: "",
      reference: "Mark 6:30-44",
      version: "",
      content: [
        "The apostles gathered around Jesus and told him all that they had done and taught. He said to them, \"Come away to a deserted place all by yourselves and rest a while.\" For many were coming and going, and they had no leisure even to eat. And they went away in the boat to a deserted place by themselves. Now many saw them going and recognized them, and they hurried there on foot from all the towns and arrived ahead of them. As he went ashore, he saw a great crowd, and he had compassion for them, because they were like sheep without a shepherd, and he began to teach them many things. When it grew late, his disciples came to him and said, \"This is a deserted place, and the hour is now very late; send them away so that they may go into the surrounding country and villages and buy something for themselves to eat.\" But he answered them, \"You give them something to eat.\" They said to him, \"Are we to go and buy two hundred denarii worth of bread and give it to them to eat?\" And he said to them, \"How many loaves have you? Go and see.\" When they had found out, they said, \"Five, and two fish.\" Then he ordered them to get all the people to sit down in groups on the green grass. So they sat down in groups of hundreds and of fifties. Taking the five loaves and the two fish, he looked up to heaven and blessed and broke the loaves and gave them to his disciples to set before the people, and he divided the two fish among them all. And all ate and were filled, and they took up twelve baskets full of broken pieces and of the fish. Those who had eaten the loaves numbered five thousand men."
      ]
    },
    {
      id: "servant-song",
      type: "hymn",
      title: "We Sing",
      hymnTitle: "The Servant Song",
      number: "#2222",
      source: "TFWS"
    },
    {
      id: "message",
      type: "message",
      title: "Message",
      messageTitle: "Collaboration",
      speaker: "Pastor Baamu Moses"
    },
    {
      id: "offertory",
      type: "offertory",
      title: "Offertory",
      song: "I Release and Let Go",
      artist: "Rickie Byars",
      offeringNote: "Offerings can be placed in the basket on the table, online at ukiahumc.org, or mailed to PO Box 323, Ukiah"
    },
    {
      id: "doxology",
      type: "asteriskedItem",
      title: "*Doxology",
      hymnTitle: "Praise God from Whom All Blessings Flow",
      number: "#95",
      source: "UMH",
      content: [
        "Praise God from whom all blessings flow",
        "Praise God all creatures high and low",
        "Give thanks to God in love made known",
        "Creator, Word, and Spirit One"
      ]
    },
    {
      id: "membership-statement",
      type: "membershipStatement",
      title: "*Membership Statement",
      content: "Members of the Ukiah United Methodist Church accept the freedom God gives us to resist evil, injustice, and oppression in whatever forms they present themselves. We welcome opportunities to bring God's love to the world in as many ways as we can. We promise to uphold our beloved church by our prayers, our presence, our gifts, our service, and our witness."
    },
    {
      id: "getting-strong",
      type: "hymn",
      title: "Getting Strong",
      hymnTitle: "Together We Serve",
      number: "#2175",
      source: "TFWS"
    },
    {
      id: "opportunities",
      type: "announcements",
      title: "Opportunities for Ministry",
      items: []
    },
    {
      id: "go-for-it",
      type: "goForIt",
      title: "Go For It!",
      attribution: "John Wesley",
      content: [
        { side: "South", text: "Do all the good you can," },
        { side: "North", text: "By all the means you can," },
        { side: "South", text: "In all the ways you can," },
        { side: "North", text: "In all the places you can," },
        { side: "South", text: "At all the times you can," },
        { side: "North", text: "To all the people you can," },
        { side: "All", text: "As long as ever you can. Amen." }
      ]
    },
    {
      id: "blessing",
      type: "sectionTitle",
      title: "Blessing"
    },
    {
      id: "stepping-out",
      type: "asteriskedItem",
      title: "*Stepping Out",
      hymnTitle: "I'm Gonna Live So God Can Use Me",
      number: "#2153",
      source: "TFWS"
    },
    {
      id: "welcoming-statement",
      type: "welcomingStatement",
      title: "We are a Welcoming & Affirming Congregation:",
      content: "We welcome all persons into full participation in the life of the congregation regardless of age, gender identity, racial or ethnic background, sexual orientation, marriage status, or physical or mental condition."
    }
  ]
}