let sum = 0;
$("#nbContext > div.nb-contents > div > div.BO_system.nb-q.ng-scope > div > section.nb-tab.ng-isolate-scope > ul > li.ng-scope.ng-isolate-scope.on > div > section.section-gap > div > div > div > div.sp-grid-body > div > div > div:nth-child(5) > div.sp-grid-data.text-center > span > span").each((n, o)=>{
    console.log(o.innerHTML);
    sum += parseInt(o.innerHTML.replace(/,/g, ''));
})
alert(sum+"원을 받으셨네요!");
