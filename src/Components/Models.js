import "./Models.css";
import down from "../resources/Down.svg";
import { useEffect, useState } from "react";

export default function Models({color}){
    const models=[
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',img:'https://s3-alpha-sig.figma.com/img/7122/4424/63f4ce7ee149800a1815c2101f22f9cc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ui7tPsGNEZQsZnB-pezY5MGjw-KGVjFHpLnsFj4fTOQN92xEeEp5XKB73BUZp~TiWdd3J-7Hquo7AXkzVo0pbZ1K9JGNf3rMFT1KuO~p-gbGmSfGFcOLYEp-krgeSQqcIBgGXSpWqBE1Ear2qBciDOVvez3oQE8wbVu1VHiNdwfbgHPT78AzaDr3TEQgZrd9NCe53GBGR6eehvlRXE7gx6pQnaRdN~aUaDvjjXC~-zDUGiNgijnUdD7oHjvKS03viaxDTkybi26ql7kZLvPDbUCATfcBQKyBNzhPdB2zDHB9-z242BHd1F9vTFFbqJc5OT8wZhA0ijdrvMnpm8YzfA__',contributors:['https://s3-alpha-sig.figma.com/img/6e46/b06a/3c41c43dea7365a585fe7f96fae57184?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBqU0cHo~70sHhCAM-glwo8cvCmkX05f~IT-3xgGBGLmNHTqHbx75SjpwqZWxf0g~OWc4x-kW5bDqvKd7gOXdtvw1msUZwrMFDQKFh6FWYVWQby42pOvq3k1vhEmyPHsfMhWYOHE5H24NjVtz6qPtft~vsYUGj3VeK3llL3nYEbv6VKdkcXNKqvLc14VhvzwgpREBdhZt9eHOI3lrLSENqX~4mlEUZOFKH~--jBmvt6~9WaHIyOJZSBa-hh3N8P6qgAiIU2eDYZ18V3OLFdIZxjND38U84z7NEoE3sOj6gbiIKLkSmMFM5nHJEVC-N~GQhjrc6T6uqFR6besHs1C9Q__','https://s3-alpha-sig.figma.com/img/49ba/0f58/07d8623a796d0d9de289a43b4c734c27?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YKv7YFnSut3yE2W9gUaQX16LP80cSACsBS428wFPXiV3aWzBnfnyKpN303r94Rrwvu388la2zG3l07rLgi8X9QM4kYbh-8vtwjgeWds7dp1RHfz7x9vU4-RquAz-iRSmgRKYAyFGxk35IkH8e-Awjy8a0LTqhJBqoRT86mB2jdHM9CRhzNUwK1myTAj1omo0czlo2FuHf33vdKYv-f4RFrGzKS1X7rpPYadLVjbLeoGjnUHpg1z02Wg6ZLiqu4ek~U9kuiaPTb-cK~YMnFh3Pphwex8buY2W~kxmTwsdm-J1HnXC7oLmf0DnTkKZp-tCP1yQqgC0zb3YPQi9b5LdVg__','https://s3-alpha-sig.figma.com/img/c080/0579/6ce1b6300483b7dd853b33cdaa6c1b86?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KgCH0UUgkK4Ln0C7MSR--0dOExsWGPE9tiE9CDlN5Oh-BPkHHAEHskbJjZJVytLqq0tRAE2vndOwMrd8rbrklktvtH29UY5ZrgoTFWDu1fnB~66FWSGfQImQp853A0fDXIdRgQSh0Bc6SaDP9M2EqKiMmigp9xf9Grxn~gEe2vvA4r9770lsw~p5SFfmhGbj~AwDuiyKnRwUTMU5GI9fcdAq-XJZeJsahV4wuF~KMF~t9btxn~uSNPc6xO6XkJcn5j0dd~YxFgFzO7-V~oJ2QsLXYEW~M~wILtTwKdTm3u~TcIU~7ekNP92THiAmy54Yvno75mXCM7MB8F9iVIH3zQ__']},
        {name:"TensorFlow",Version:"v1.1",licence:"MIT",rating:3,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['https://s3-alpha-sig.figma.com/img/870d/4ca6/32975bd58852cd8071eaa1da5d686ce5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eUq~3Q7SU149I1s3Lb3Hl7~9Q3K~sWpadFzecRMZKyA17RrPBekgtLnulweWQFaTQQBWzgPLx9iJyPN8Y2hbO9Aa7dx8MjuOUZJ943bLppLaDjgmSn0X3K4ph06Ppf1A7ngXZhs5f7kuzmRWtmYHBtryIaVC3ekPrEOG42pgbsSknnsMessHklIRnIvaOoTmy4k2dc~H~L9ayMxlIg1iE4y-AuAZUatHRfyeUPl85DnSFhaxNLq62UwZ9CcWvKnO7809I0e1i5nS9isxpNquugXCZ5g6N8aKFWl-4PYlOlj3iSJjgp6CVMb5ThDypmF3w4xH5zHjkgPH2Mnqh1~w6A__','https://s3-alpha-sig.figma.com/img/7cee/7855/6bced12480eb56747319e197f2420d7e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eS3CfE-W2vhOhVSXuQ~mKhi~AD6f~yDHWFL2JAFqrTwvS8q62Q-XceKD-pOz0UlG9km07Q0uTXrYJUdyE3rAMVjON1KjTg0dblQBHTqW894DFmhyEh36te~DqgvcfcaYAIVVovOGEU3Sh-gn2U4JFL7H5HBJ~eUICEfnI3HAKn0HaZZtZhewsDEUJpLTB8ne9U29JU~bMhBlyAGn3dNin34B9DsjTLCSPgcUL~yXLW44rhXWQu-9jqTVQ8yWZjf2xvBGg9fRUWaj3lWmzhcmO5qM2CoGD-7aIwzPhui5eNyIrDYU4z0j-61gR633Vv8HCXjR~8xLUXWEir~663rUfg__'],img:'https://s3-alpha-sig.figma.com/img/3d31/270d/1b75e3e5ad48f968c4295f7d12cb6c7c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oQ9FKhv1T6A4OY33pQrI4fcVaI79cmfpo4Z~rwj6MFucs8YlgG~rthV53Z301GkL9SSRXa3DUxIqwjrHpxAJUZVZO90A3sZ0zdaaq1Gi9KwrL8Q52~Cs2FsgMq7vQ9bjHNRYmaT1ftHV8Vmpjcc9t2F0hA54kUKQOOFWtfnKYgK93svZswTx~mRMbPZN8ve2fkoKoY8ZQ7EKW5QrScDIIFjrO07~BJ25Wy8OQ7QJL2OnOKkK9KQlVW5OLAiPBxGKKQgpPgQ7oCUU9cP8diSIUFa-Q11HlGO2t5rLvezYjokOLjL5tmDYoR31z8X4gUcC-y1uI8XiSqk9ZYvY6-C9ZA__'},
        {name:"Bard",Version:"v0.5",licence:"Private",rating:3,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['https://s3-alpha-sig.figma.com/img/0910/a884/1523eefc3b808f9c69a2a9a14b0737a6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YaqBSokU9y7qfxe91l~V5ADiEZdXUh75nvFTZ8lz4-Y3VAByJzaLa9pE5NYzurTyy4mJF0Dgzuuo6OYXe5jrT8SDkUwuVrfUNZOQIzRlDcmBtPXwofuZaxqByz~qtd3KKgtRH-S2svOdzSdxHoexMip8Zb8Q9ZQWHpUoGybItj5YFEVBY4xPLpXCUNavtQ6l67Tr7xdQpzO5HEOcAi82k6obY-Eusmb-Hw43l32YlC6HVyeqZtc3cbcYOl2Y1tgmLjUFpRlGpbxOg0a2Zbv0b2kqyMk8Do4V06pPsPPPm45o7Gmp9PQURG22JQvkADT492PyY3CF0yZUnXexINuu~g__'],img:"https://s3-alpha-sig.figma.com/img/7bdf/3699/347fb4f19c9b1cc8569ba121f14c9c54?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ny~b5BPpfxGbbfzE8E8N-L0BBEWN-nvkzrZ86s-I4TLubu53NRRU9gKxPZvWdhH8EMnrX87p2NeAUmdQpsiwCgwONmNdRXqg7iS7A9lSvvcQ1XUu1Pory2k0UUogh1HfWV18WHo4lT6ddWPSazEFu9wr8E7GevbF849ItGUMF5hi5ObOftvPwAP7aoPmohkUW0Jp4oemzJ3wbsnBJG051iSuzHYg0u3oYXoQdRA6lJNagH7gLeHy8DkwPN7H-AYWFLxGeoN2Z50tFLprNCI1RWGje1zA1V2otPexlGoX9hjpfqRWhZPFvnU3rsIxUIg19riUei-io~Bnm2bNCAGhZQ__"},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['https://s3-alpha-sig.figma.com/img/3d52/d87f/98e03d325910cf335905a2c23bfadf5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMR-izbG3IZOAuFwDotZcxQ3Hjoda2yNMWqNy1pErXTwQjs4bEzsUrbP8e4YUGzdBUpGlz68UPJGilnDmldhIN0RUGXTmSqJEUALl~sjMuYk8E0ne7l5NJ74ZJgGcr9mxKCgbsyLJZC-S2SSix0B7ZoAi38kZFRIiS1guyIpMkr3cPz6jwqqiZRWHFcByCQk~C004vlysKmuid83nrUzk2efvTqRqMSvr0jQu5u~3CMacR0bWkbsXt-cVZ8cvlB8cYZrm0EgO0l8wjIld4gE09h04fgZS7DP2FDIYtwtkMPb~Sy0eMY3lEbDAT1BlMQY7tM4ke4FmZdcZ7ZQ3pprQA__','https://s3-alpha-sig.figma.com/img/2a63/fd83/4af56d438a9c6cdc999f710ab00c5eab?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edcQ7ATKlt2wbNqqyeZjlOA8H4FR5bCBqluPzm2tIBDRnuvSIrgIPKaUqd3i~jiTwsjDvUnqnE-ZJWU7JysOIVkABzSNVGm3Rnsz8zlrd~ZIPtDWplxGTDGL2vbrVJlsF7Wu6EpH4YVxC39PDR7fSS8dcPJx2z6wpzNx8u3ImfheS~7xborKMYU2rTbnP5AyxBApuXge-gTu5eb~wms~YTccCuJHZLfu6~kgcV8LwkqalMozFKAKBU4Zg5-CfZj4oAarNof7A04oM5B5Ar7fAslKIpoi2mXJvSvsMMFLAwCf38p6x54Tr4VykZRAQj-ZiCv16mOq2BganGOBkUrH3g__','https://s3-alpha-sig.figma.com/img/14f3/70e8/ca6033d6b43b6e7693500c0689ea51cc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lAipiy-05yx4vnQOGs7-aF6oVaRjv9HaBK9rMBjmBlO-yrYZLpvV~uqztn~IDDKvL1vtNIxwTGqEvXicvSozNxI-7fOGfJmNMB4mH-yoHWB8OyB5rR9BMtUPVl6VA-s8Yl163FtRe2uYnBRDgNUTdC2iSIM17nWvLySQx7DdVheVOg2Z8~UCAo8gls4gPDbftiz7~fxC4huaicB1GkTQGQS8RDIw6eCLo7nYWpU96Z9vVbIcbUWFeZz0mC8~GkBCdP9swyj6kMGLwiatdWIoiwq8~r6V4jKOmDzdchb87vnu-XN~cW8I-Rlh3RkhcUzk7bi4dqz~-Df-W1DushWbLw__']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['https://s3-alpha-sig.figma.com/img/3d52/d87f/98e03d325910cf335905a2c23bfadf5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMR-izbG3IZOAuFwDotZcxQ3Hjoda2yNMWqNy1pErXTwQjs4bEzsUrbP8e4YUGzdBUpGlz68UPJGilnDmldhIN0RUGXTmSqJEUALl~sjMuYk8E0ne7l5NJ74ZJgGcr9mxKCgbsyLJZC-S2SSix0B7ZoAi38kZFRIiS1guyIpMkr3cPz6jwqqiZRWHFcByCQk~C004vlysKmuid83nrUzk2efvTqRqMSvr0jQu5u~3CMacR0bWkbsXt-cVZ8cvlB8cYZrm0EgO0l8wjIld4gE09h04fgZS7DP2FDIYtwtkMPb~Sy0eMY3lEbDAT1BlMQY7tM4ke4FmZdcZ7ZQ3pprQA__','https://s3-alpha-sig.figma.com/img/2a63/fd83/4af56d438a9c6cdc999f710ab00c5eab?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edcQ7ATKlt2wbNqqyeZjlOA8H4FR5bCBqluPzm2tIBDRnuvSIrgIPKaUqd3i~jiTwsjDvUnqnE-ZJWU7JysOIVkABzSNVGm3Rnsz8zlrd~ZIPtDWplxGTDGL2vbrVJlsF7Wu6EpH4YVxC39PDR7fSS8dcPJx2z6wpzNx8u3ImfheS~7xborKMYU2rTbnP5AyxBApuXge-gTu5eb~wms~YTccCuJHZLfu6~kgcV8LwkqalMozFKAKBU4Zg5-CfZj4oAarNof7A04oM5B5Ar7fAslKIpoi2mXJvSvsMMFLAwCf38p6x54Tr4VykZRAQj-ZiCv16mOq2BganGOBkUrH3g__','https://s3-alpha-sig.figma.com/img/14f3/70e8/ca6033d6b43b6e7693500c0689ea51cc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lAipiy-05yx4vnQOGs7-aF6oVaRjv9HaBK9rMBjmBlO-yrYZLpvV~uqztn~IDDKvL1vtNIxwTGqEvXicvSozNxI-7fOGfJmNMB4mH-yoHWB8OyB5rR9BMtUPVl6VA-s8Yl163FtRe2uYnBRDgNUTdC2iSIM17nWvLySQx7DdVheVOg2Z8~UCAo8gls4gPDbftiz7~fxC4huaicB1GkTQGQS8RDIw6eCLo7nYWpU96Z9vVbIcbUWFeZz0mC8~GkBCdP9swyj6kMGLwiatdWIoiwq8~r6V4jKOmDzdchb87vnu-XN~cW8I-Rlh3RkhcUzk7bi4dqz~-Df-W1DushWbLw__']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['https://s3-alpha-sig.figma.com/img/3d52/d87f/98e03d325910cf335905a2c23bfadf5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMR-izbG3IZOAuFwDotZcxQ3Hjoda2yNMWqNy1pErXTwQjs4bEzsUrbP8e4YUGzdBUpGlz68UPJGilnDmldhIN0RUGXTmSqJEUALl~sjMuYk8E0ne7l5NJ74ZJgGcr9mxKCgbsyLJZC-S2SSix0B7ZoAi38kZFRIiS1guyIpMkr3cPz6jwqqiZRWHFcByCQk~C004vlysKmuid83nrUzk2efvTqRqMSvr0jQu5u~3CMacR0bWkbsXt-cVZ8cvlB8cYZrm0EgO0l8wjIld4gE09h04fgZS7DP2FDIYtwtkMPb~Sy0eMY3lEbDAT1BlMQY7tM4ke4FmZdcZ7ZQ3pprQA__','https://s3-alpha-sig.figma.com/img/2a63/fd83/4af56d438a9c6cdc999f710ab00c5eab?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edcQ7ATKlt2wbNqqyeZjlOA8H4FR5bCBqluPzm2tIBDRnuvSIrgIPKaUqd3i~jiTwsjDvUnqnE-ZJWU7JysOIVkABzSNVGm3Rnsz8zlrd~ZIPtDWplxGTDGL2vbrVJlsF7Wu6EpH4YVxC39PDR7fSS8dcPJx2z6wpzNx8u3ImfheS~7xborKMYU2rTbnP5AyxBApuXge-gTu5eb~wms~YTccCuJHZLfu6~kgcV8LwkqalMozFKAKBU4Zg5-CfZj4oAarNof7A04oM5B5Ar7fAslKIpoi2mXJvSvsMMFLAwCf38p6x54Tr4VykZRAQj-ZiCv16mOq2BganGOBkUrH3g__','https://s3-alpha-sig.figma.com/img/14f3/70e8/ca6033d6b43b6e7693500c0689ea51cc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lAipiy-05yx4vnQOGs7-aF6oVaRjv9HaBK9rMBjmBlO-yrYZLpvV~uqztn~IDDKvL1vtNIxwTGqEvXicvSozNxI-7fOGfJmNMB4mH-yoHWB8OyB5rR9BMtUPVl6VA-s8Yl163FtRe2uYnBRDgNUTdC2iSIM17nWvLySQx7DdVheVOg2Z8~UCAo8gls4gPDbftiz7~fxC4huaicB1GkTQGQS8RDIw6eCLo7nYWpU96Z9vVbIcbUWFeZz0mC8~GkBCdP9swyj6kMGLwiatdWIoiwq8~r6V4jKOmDzdchb87vnu-XN~cW8I-Rlh3RkhcUzk7bi4dqz~-Df-W1DushWbLw__']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['https://s3-alpha-sig.figma.com/img/3d52/d87f/98e03d325910cf335905a2c23bfadf5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMR-izbG3IZOAuFwDotZcxQ3Hjoda2yNMWqNy1pErXTwQjs4bEzsUrbP8e4YUGzdBUpGlz68UPJGilnDmldhIN0RUGXTmSqJEUALl~sjMuYk8E0ne7l5NJ74ZJgGcr9mxKCgbsyLJZC-S2SSix0B7ZoAi38kZFRIiS1guyIpMkr3cPz6jwqqiZRWHFcByCQk~C004vlysKmuid83nrUzk2efvTqRqMSvr0jQu5u~3CMacR0bWkbsXt-cVZ8cvlB8cYZrm0EgO0l8wjIld4gE09h04fgZS7DP2FDIYtwtkMPb~Sy0eMY3lEbDAT1BlMQY7tM4ke4FmZdcZ7ZQ3pprQA__','https://s3-alpha-sig.figma.com/img/2a63/fd83/4af56d438a9c6cdc999f710ab00c5eab?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edcQ7ATKlt2wbNqqyeZjlOA8H4FR5bCBqluPzm2tIBDRnuvSIrgIPKaUqd3i~jiTwsjDvUnqnE-ZJWU7JysOIVkABzSNVGm3Rnsz8zlrd~ZIPtDWplxGTDGL2vbrVJlsF7Wu6EpH4YVxC39PDR7fSS8dcPJx2z6wpzNx8u3ImfheS~7xborKMYU2rTbnP5AyxBApuXge-gTu5eb~wms~YTccCuJHZLfu6~kgcV8LwkqalMozFKAKBU4Zg5-CfZj4oAarNof7A04oM5B5Ar7fAslKIpoi2mXJvSvsMMFLAwCf38p6x54Tr4VykZRAQj-ZiCv16mOq2BganGOBkUrH3g__','https://s3-alpha-sig.figma.com/img/14f3/70e8/ca6033d6b43b6e7693500c0689ea51cc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lAipiy-05yx4vnQOGs7-aF6oVaRjv9HaBK9rMBjmBlO-yrYZLpvV~uqztn~IDDKvL1vtNIxwTGqEvXicvSozNxI-7fOGfJmNMB4mH-yoHWB8OyB5rR9BMtUPVl6VA-s8Yl163FtRe2uYnBRDgNUTdC2iSIM17nWvLySQx7DdVheVOg2Z8~UCAo8gls4gPDbftiz7~fxC4huaicB1GkTQGQS8RDIw6eCLo7nYWpU96Z9vVbIcbUWFeZz0mC8~GkBCdP9swyj6kMGLwiatdWIoiwq8~r6V4jKOmDzdchb87vnu-XN~cW8I-Rlh3RkhcUzk7bi4dqz~-Df-W1DushWbLw__']},
        {name:"Chat GPT",Version:"v2.1",licence:"MIT",rating:4,description:'ChatGPT is a chatbot developed by OpenAI and launched on November 30, 2022. Based on a large language model, it enables users to refine and steer a conversation towards a desired length, format, style, level of detail, and language.',contributors:['https://s3-alpha-sig.figma.com/img/3d52/d87f/98e03d325910cf335905a2c23bfadf5a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BMR-izbG3IZOAuFwDotZcxQ3Hjoda2yNMWqNy1pErXTwQjs4bEzsUrbP8e4YUGzdBUpGlz68UPJGilnDmldhIN0RUGXTmSqJEUALl~sjMuYk8E0ne7l5NJ74ZJgGcr9mxKCgbsyLJZC-S2SSix0B7ZoAi38kZFRIiS1guyIpMkr3cPz6jwqqiZRWHFcByCQk~C004vlysKmuid83nrUzk2efvTqRqMSvr0jQu5u~3CMacR0bWkbsXt-cVZ8cvlB8cYZrm0EgO0l8wjIld4gE09h04fgZS7DP2FDIYtwtkMPb~Sy0eMY3lEbDAT1BlMQY7tM4ke4FmZdcZ7ZQ3pprQA__','https://s3-alpha-sig.figma.com/img/2a63/fd83/4af56d438a9c6cdc999f710ab00c5eab?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=edcQ7ATKlt2wbNqqyeZjlOA8H4FR5bCBqluPzm2tIBDRnuvSIrgIPKaUqd3i~jiTwsjDvUnqnE-ZJWU7JysOIVkABzSNVGm3Rnsz8zlrd~ZIPtDWplxGTDGL2vbrVJlsF7Wu6EpH4YVxC39PDR7fSS8dcPJx2z6wpzNx8u3ImfheS~7xborKMYU2rTbnP5AyxBApuXge-gTu5eb~wms~YTccCuJHZLfu6~kgcV8LwkqalMozFKAKBU4Zg5-CfZj4oAarNof7A04oM5B5Ar7fAslKIpoi2mXJvSvsMMFLAwCf38p6x54Tr4VykZRAQj-ZiCv16mOq2BganGOBkUrH3g__','https://s3-alpha-sig.figma.com/img/14f3/70e8/ca6033d6b43b6e7693500c0689ea51cc?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lAipiy-05yx4vnQOGs7-aF6oVaRjv9HaBK9rMBjmBlO-yrYZLpvV~uqztn~IDDKvL1vtNIxwTGqEvXicvSozNxI-7fOGfJmNMB4mH-yoHWB8OyB5rR9BMtUPVl6VA-s8Yl163FtRe2uYnBRDgNUTdC2iSIM17nWvLySQx7DdVheVOg2Z8~UCAo8gls4gPDbftiz7~fxC4huaicB1GkTQGQS8RDIw6eCLo7nYWpU96Z9vVbIcbUWFeZz0mC8~GkBCdP9swyj6kMGLwiatdWIoiwq8~r6V4jKOmDzdchb87vnu-XN~cW8I-Rlh3RkhcUzk7bi4dqz~-Df-W1DushWbLw__']}
    ]
    const popOptions=["All",'UI/UX Design','Frontend','Backend','Full Stack','Graphic Designer',"Web Developer",'QA'];
    const [popChecks1,setPopChecks1]=useState(Array(popOptions.length).fill(false));
    const [popChecks2,setPopChecks2]=useState(Array(popOptions.length).fill(false));
    const [popChecks3,setPopChecks3]=useState(Array(popOptions.length).fill(false));
    const [modelOpen,setModelOpen]=useState(Array(models.length).fill(false));
    const handleChange=(e,index,setPopChecks,popChecks)=>{
        var updated=[];
        if(index===0){
            for(let i=0;i<popChecks.length;i++)
                    updated.push(e.target.checked)
        }
        else{
            for(let i=0;i<popChecks.length;i++){
                if(i!==index)
                    updated.push(popChecks[i])
                else
                    updated.push(e.target.checked)
            };
            if(updated.slice(1,4).filter((e)=>e===true).length===0)
                updated[0]=false
            else
                updated[0]=true

        }
        setPopChecks(updated);
    }
    const handleOpen=(index)=>{
        var updated=[];

        for(var i=0;i<popOpen.length;i++){
            if(i!==index)
                updated.push(false)
            else
                updated.push(!popOpen[i])
        };
        setPopOpen(updated);
    }
    const handleModelOpen=(index)=>{
        var updated=[];
        for(var i=0;i<modelOpen.length;i++){
            if(i!==index)
                updated.push(false)
            else
                updated.push(!modelOpen[i])
        };
        setModelOpen(updated);
    }
    const [popOpen,setPopOpen]=useState(Array(3).fill(false));
    useEffect(()=>{
        const popSelector = document.getElementById("Models");
        popSelector.style.setProperty('--Color', `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`);
    },[color])
    return(
        <div id="Models">
            <div className="header">
                <div className="heading">AI Models </div>
                <div className="options">
                <div style={{position:'relative'}}>
                    <div className="option" onClick={()=>handleOpen(0)}>Model <img src={down} className="down" alt="down"/></div>
                    <div id="popup" style={popOpen[0]?{pointerEvents:"auto",opacity:1}:{pointerEvents:"none",opacity:0}}>
                        {popOptions.map((popOption,index)=>(
                            <div key={index} className='popOption' >
                                <input type="checkbox" checked={popChecks1[index]} onChange={e=>handleChange(e,index,setPopChecks1,popChecks1)} className={index===0?"popCheckbox popCheckboxAll":"popCheckbox"}/> <label style={{position:'relative'}}>{popOption}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <div className="option" onClick={()=>handleOpen(1)}>Model <img src={down} className="down" alt="down"/></div>
                    <div id="popup" style={popOpen[1]?{pointerEvents:"auto",opacity:1}:{pointerEvents:"none",opacity:0}} >
                        {popOptions.map((popOption,index)=>(
                            <div key={index} className={'popOption'} >
                                <input type="checkbox" checked={popChecks2[index]} onChange={e=>handleChange(e,index,setPopChecks2,popChecks2)} className={index===0?"popCheckbox popCheckboxAll":"popCheckbox"}/> <label style={{position:'relative'}}>{popOption}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{position:'relative'}}>
                    <div className="option" onClick={()=>handleOpen(2)}>Model <img src={down} className="down" alt="down"/></div>
                    <div id="popup" style={popOpen[2]?{pointerEvents:"auto",opacity:1}:{pointerEvents:"none",opacity:0}}>
                        {popOptions.map((popOption,index)=>(
                            <div key={index} className={'popOption'} >
                                <input type="checkbox" checked={popChecks3[index]} onChange={e=>handleChange(e,index,setPopChecks3,popChecks3)} className={index===0?"popCheckbox popCheckboxAll":"popCheckbox"}/> <label style={{position:'relative'}}>{popOption}</label>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                <div className="fieldNames">
                    <div className="fieldName">Model</div>
                    <div className="fieldName">Versions</div>
                    <div className="fieldName">Licences</div>
                    <div className="fieldName">Contributors</div>
                    <div className="fieldName">Rating</div>
                </div>
            </div>
            <div className="content">
                {models.map((model,index)=>(
                    <div key={index}>
                    <div className="model" onClick={()=>handleModelOpen(index)}>
                        <div className="modelInfo"><div className="logo">{model.img!==undefined?<img src={model.img} className="logoImg" alt='logo'/>:null}</div><div style={{whiteSpace:'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>{model.name}</div></div>
                        <div className="modelInfo">{model.Version}</div>
                        <div className="modelInfo">{model.licence}</div>
                        <div className="modelInfo" style={{justifyContent:'end'}}>
                            {model.contributors.map((img,index)=>(
                                <img src={img} key={index} className="contributorImg" alt='contributor'/>
                            ))}
                        </div>
                        <div className="modelInfo">
                            {Array(model.rating).fill().map((d,index)=>    
                                <svg width="18" key={index} height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill={`hsl(${color[0]},${color[1]}%,${color[2]}%`} />
                                </svg>
                            )
                            }
                            {Array(5-model.rating).fill().map((d,index)=>    
                                <svg width="18" key={index} height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.10326 0.816986C8.47008 0.0737399 9.52992 0.07374 9.89674 0.816986L11.7063 4.48347C11.8519 4.77862 12.1335 4.98319 12.4592 5.03051L16.5054 5.61846C17.3256 5.73765 17.6531 6.74562 17.0596 7.32416L14.1318 10.1781C13.8961 10.4079 13.7885 10.7389 13.8442 11.0632L14.5353 15.0931C14.6754 15.91 13.818 16.533 13.0844 16.1473L9.46534 14.2446C9.17402 14.0915 8.82598 14.0915 8.53466 14.2446L4.91562 16.1473C4.18199 16.533 3.32456 15.91 3.46467 15.0931L4.15585 11.0632C4.21148 10.7389 4.10393 10.4079 3.86825 10.1781L0.940385 7.32416C0.346867 6.74562 0.674378 5.73765 1.4946 5.61846L5.54081 5.03051C5.86652 4.98319 6.14808 4.77862 6.29374 4.48347L8.10326 0.816986Z" fill="#17171A"/>
                                </svg>
                            )
                            }
                        </div>
                        </div>
                            <div id="modelExt" style={{gridTemplateRows:modelOpen[index]?"1fr":"0fr",padding:modelOpen[index]?"30px":"0px 30px"}}>
                            <div className="modelExt">{model.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}