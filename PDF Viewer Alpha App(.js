If(

    
// pdf icon
    EndsWith(ThisItem.'File name with extension', "pdf"),
    "data:image/svg+xml;utf8, %3Csvg%20%20viewBox%3D%270%200%202048%202048%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M1920%201664h-128v384H128v-384H0V640h128V0h1243l421%20421v219h128v1024zM1408%20384h165l-165-165v165zM256%20640h1408V512h-384V128H256v512zm1408%201024H256v256h1408v-256zm128-896H128v768h1664V768zM448%20896q40%200%2075%2015t61%2041%2041%2061%2015%2075q0%2040-15%2075t-41%2061-61%2041-75%2015h-64v128H256V896h192zm0%20256q26%200%2045-19t19-45q0-26-19-45t-45-19h-64v128h64zm448-256q53%200%2099%2020t82%2055%2055%2081%2020%20100q0%2053-20%2099t-55%2082-81%2055-100%2020H768V896h128zm0%20384q27%200%2050-10t40-27%2028-41%2010-50q0-27-10-50t-27-40-41-28-50-10v256zm384-384h320v128h-192v128h192v128h-192v128h-128V896z%27%20fill%3D%27%23a4262c%27%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
    // Word icon
    EndsWith(ThisItem.'File name with extension', "docx"),

    "data:image/svg+xml;utf8, %3Csvg%20%20viewBox%3D%270%200%202048%202048%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M2048%20475v1445q0%2027-10%2050t-27%2040-41%2028-50%2010H640q-27%200-50-10t-40-27-28-41-10-50v-256H115q-24%200-44-9t-37-25-25-36-9-45V627q0-24%209-44t25-37%2036-25%2045-9h397V128q0-27%2010-50t27-40%2041-28%2050-10h933q26%200%2049%209t42%2028l347%20347q18%2018%2027%2041t10%2050zm-384-256v165h165l-165-165zM320%201424h161q2-8%209-43t18-83%2021-103%2022-101%2016-76%208-31l7%2030q7%2030%2017%2077t23%20100%2023%20103%2019%2084%2010%2043h160l148-672H834l-80%20438-100-438H502l-96%20440-86-440H170l150%20672zm320%20496h1280V512h-256q-27%200-50-10t-40-27-28-41-10-50V128H640v384h397q24%200%2044%209t37%2025%2025%2036%209%2045v922q0%2024-9%2044t-25%2037-36%2025-45%209H640v256zm640-1024V768h512v128h-512zm0%20256v-128h512v128h-512zm0%20256v-128h512v128h-512z%27%20fill%3D%27%230078d4%27%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
    
    // Excel icon
    EndsWith(ThisItem.'File name with extension', "xlsx"),
    "data:image/svg+xml;utf8, %3Csvg%20%20viewBox%3D%270%200%202048%202048%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M2048%20475v1445q0%2027-10%2050t-27%2040-41%2028-50%2010H640q-27%200-50-10t-40-27-28-41-10-50v-256H115q-24%200-44-9t-37-25-25-36-9-45V627q0-24%209-44t25-37%2036-25%2045-9h397V128q0-27%2010-50t27-40%2041-28%2050-10h933q26%200%2049%209t42%2028l347%20347q18%2018%2027%2041t10%2050zm-384-256v165h165l-165-165zM261%201424h189q2-4%2012-23t25-45%2029-55%2029-53%2023-41%2010-17q27%2059%2060%20118t65%20116h187l-209-339%20205-333H707q-31%2057-60%20114t-63%20112q-29-57-57-113t-57-113H279l199%20335-217%20337zm379%20496h1280V512h-256q-27%200-50-10t-40-27-28-41-10-50V128H640v384h397q24%200%2044%209t37%2025%2025%2036%209%2045v922q0%2024-9%2044t-25%2037-36%2025-45%209H640v256zm640-1024V768h512v128h-512zm0%20256v-128h512v128h-512zm0%20256v-128h512v128h-512z%27%20fill%3D%27%230b6a0b%27%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
    
    // PowerPoint icon
    EndsWith(ThisItem.'File name with extension', "pptx"),
    "data:image/svg+xml;utf8, %3Csvg%20%20viewBox%3D%270%200%202048%202048%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M2048%20475v1445q0%2027-10%2050t-27%2040-41%2028-50%2010H640q-27%200-50-10t-40-27-28-41-10-50v-256H115q-24%200-44-9t-37-25-25-36-9-45V627q0-24%209-44t25-37%2036-25%2045-9h397V128q0-27%2010-50t27-40%2041-28%2050-10h933q26%200%2049%209t42%2028l347%20347q18%2018%2027%2041t10%2050zm-384-256v165h165l-165-165zM368%20752v672h150v-226h100q52%200%2097-15t78-46%2053-72%2020-97q0-56-17-97t-50-67-76-39-97-13H368zm1552%201168V512h-256q-27%200-50-10t-40-27-28-41-10-50V128H640v384h397q24%200%2044%209t37%2025%2025%2036%209%2045v922q0%2024-9%2044t-25%2037-36%2025-45%209H640v256h1280zM1536%20640q79%200%20149%2030t122%2082%2083%20123%2030%20149h-384V640zm-128%20128v384h384q0%2080-30%20149t-82%20122-123%2083-149%2030q-33%200-65-6t-63-18V792q31-11%2063-17t65-7zm-804%20300h-86V883h90q47%200%2074%2020t27%2070q0%2052-28%2073t-77%2022z%27%20fill%3D%27%23ca5010%27%3E%3C%2Fpath%3E%3C%2Fsvg%3E",
    

    // Other filetype icon,
    "data:image/svg+xml;utf8, %3Csvg%20%20viewBox%3D%270%200%202048%202048%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cpath%20d%3D%27M1243%200l549%20549v1499H128V0h1115zm37%20219v293h293l-293-293zM256%201920h1408V640h-512V128H256v1792zm256-896V896h896v128H512zm0%20256v-128h896v128H512zm0%20256v-128h896v128H512z%27%20fill%3D%27%237a7574%27%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
)