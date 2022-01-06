
import Link from "next/link"
import Head from 'next/head'

function singleArticle() {
   
    return (
        
        <div className="grid grid-cols-1 mt-4 gap-6 p-4 overflow-scroll h-screen" dir="rtl">
            <Head>
                <title>How to design an Accessible Course ?</title>
            </Head>
           <p >في يونيو عام 1880م ، و في سن تسعة عشر شهراً فقط, أصيبت هيلين كيلر, أديبة ومحاضرة أمريكية, بمرض غريب أدى إلى فقدانها السمع والبصر تماماً، وعلي الرغم من ده قدرت انها تدرس وتلتحق بكلية الفنون وتتفوق، كمان قدرت تقود طائرة بنفسها ونجحت في ده!! 
           <br />
           تخيل كمية الصعوبات اللي واجهتها في المدرسة و الكلية علشان تقدر تحقق كل ده، تعتقد دلوقتي في عام ٢٠٢١م هل في وسيلة فعالة لمساعدتها في عملية التعلم؟
           <br />
           اكيد في , وهي شوية حاجات بناخد بالنا منها واحنا بنعمل ال E-learning courses  عشان نقدر نقول ان ال course  بتاعنا Accessible  طب يعني اية اصلا Accessibility   ال Accessibility   ان كل الناس تتعامل مع ال course  بتاعك بسهولة حتي الاشخاص الي عندهم Disabilities  .
           </p>
           <iframe className=" w-full" height="360" src="https://www.youtube.com/embed/o2vDmDGlRz8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <ul  className="list-disc mr-8">
               <h2 className="font-bold">انواع ال Disabilities  :-</h2>
               <li>حركية</li>
               <li>سمعية</li>
               <li>بصرية</li>
           </ul>
           <p>
           ممكن حد يجي فدماغه سؤال دلوقتي "الكورس الي انا بعمله مش موجه للفئة دى فبالتالي انا مش محتاج اعمل كدا"
<br />
لا طبعا محتاج تعمل برضوا لان ال Disability  مش شرط تبقا دايما ممكن تبقا لحظية زى مثلا ان الشخص الي بيستخدم الكورس في الوقت الحالي ممكن تكون ام شايلة طفلها مثلا او حد بيشرب شاي مثلا وماسك الكوباية في ايده :D فبالتالي دى اعاقة لحظية برضوا وبالتالي هما محتاجين يتعاملوا مع ال course  من خلال ال keyboards  .
<br />
وفي شوية Principles  ممكن نستخدمها تساعدنا ان ال Course  بتاعنا فالاخر يبقا Accessible  :-
           </p>
        <ul className="list-disc mr-8">
            <li> Perceivable  : ودة ان اي حد يقدر يتلقي المعلومة الموجودة في ال course  زى ان يكون Alternative text  للصور مثلا او اي حاجة من ال multimedia </li>
            <li>Operable : ودة ان ال course  شغال بالطرق المختلفة فمثلا يكون في keyboards shortcuts  لكل حاجة موجودة فيقدر ال learner  يستخدم ال keyboard  فقط .</li>
            <li>Understandable  : تكون اللغة والكلمات المستخدمة مفهومة بالنسبة لل learner  ودة من خلال ان information وال user interface  المستخدمة تكون سهلة وبسيطة بالنسبة لل learner  وممكن لو حاجة صعبة شوية فالتعامل يكون فيها help  تساعده .</li>
            <li> Robust : تتكيف مع الاجهزة المختلفة الي ال learner  بيستخدمها من خلالها وتظهر بشكل مناسب سواء مفتوح من موبايل او لابتوب وغيره .</li>
        </ul>
        <h2 className="font-bold">طب اية انواع ال Disabilities  :-</h2>
        <ul className="list-disc mr-8">
            <li>  Attention-Deficit او فرط الانتباه : ودى بتحاول انك متستخدمش صور او اصوات ممكن تشتت ال learner  فبالتالي الشخص ياخد افضل Learning experience</li>
            <li> Blindness or low vision  او الشخص الكفيف او عنده ضعف في الابصار : وفالحالة دى لازم نهتم ان احنا نحط Alternative text  للميديا زى الصور لان هو بيستخدم ال screen record  بالتالي هي تقرا ال Alternative text  الي انت حاطه.</li>
            <li> Deaf/Hard of hearing  او الشخص الي عنده ضعف في السمع : وبالتالي هو اي فيديو او audio  محتاج ليه Alternative text  .</li>
            <li>Physical disabilities  او الاعاقات الحركية : وهنا ال Learner  ممكن يكون بيستخدم ال keyboards  فمحتاجين نقدر نخلي ال Learner  بيتعامل مع ال course  من خلال ال key shortcuts  فقط.</li>
        </ul>
        <h2 className="font-bold">طب ازاي ممكن نطبق دة في Articulate Storyline 360  :-</h2>
        <h3>بالنسبة للاشخاص الي عنده ضعف سمع :-</h3>
        <p>
        ممكن تعمل import  ل caption  للفيديو الي هتستخدمه ودة مش هيبقي مفيد بس بالنسبة للاشخاص الي عندها ضعف سمع فقط ولكن لو الكورسز مقدم بلغة غير اللغة الام لل learner  
        <br />
وحاول تتجنب استخدام ال Quiz timer  عشان تعاملهم مع ال course  مختلف فتسيب ليهم الوقت الكافي الي يستخدموا فيه الcourse  .
        </p>
        <h3>بالنسبة للاشخاص ذوي الاعاقة البصرية :-</h3>
        <p>
    
بيستخدموا الاشخاص ذوي الاعاقة البصرية screen readers فبالتالي محتاجين نضيف لاي حاجة visual  ال Alternative text
        </p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQFKNfIBSKXIlg/article-inline_image-shrink_1000_1488/0/1631189219718?e=1646870400&v=beta&t=CIw8r7B3r7SEYsa2uNCrbb41bnyw9PmoocvK5BU8f-0" alt="" />
        <p>فبالتالي الصورة دى متعتبرش Accessible  وعشان نحل حاجة زى كدا هنبدا نضيف ليها Alternative text  زى مثلا </p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQHAQrqTHuMWrw/article-inline_image-shrink_1000_1488/0/1631189241695?e=1646870400&v=beta&t=m_eOs1AQJugEqRDyJxdFLMKa_dF5Fmi-dPRoFI7mBsc" alt="" />
        <p>
        وكمان لازم ناخد بالنا من Focus order  
<br />
عشان ال screen reader  بيقرا بالترتيب الموجود فيه بالتالي نركز علي ترتيب عرض الcontent  بالنسبة لل learner 
        </p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQHkIcUSXct92Q/article-inline_image-shrink_1000_1488/0/1631189307475?e=1646870400&v=beta&t=1lT5xZyiHYBXF_xe7D-c7w_7qnvl1DXGbBxH0kdFFmE" alt="" />
        <p>
        في فترة الحجر الصحي ازداد انشغالنا، و تداخلت المسؤليات، والشغل بقي منزلي بشكل كبير، وكل ده بيغير من طبيعة احتياجاتنا، و بنحتاج طرق جديدة للتواصل، بالضافة لشرائح كبيرة موجودة بالفعل، علي سبيل المثال في 2.2 مليار شخص على الأقل في جميع أنحاء العالم من ضعف البصر، علشان كده كل فكرة جديدة لزيادة ال Accessibility هي قناة للوصول لمجتمع جديد بالكامل.
        <br />
و بكده نكون فهمنها اهمية ال Accessibility، وانها مش رفاهية سواء في اطار مساعدة المحتاجين ، او توصيل افضل Learning experience  للمتعلم
        </p>
        <Link href={'/articles'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default singleArticle
 