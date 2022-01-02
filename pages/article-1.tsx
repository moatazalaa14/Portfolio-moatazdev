
import Link from "next/link"
import Head from 'next/head'

function singleArticle() {
   
    return (
        
        <div className="grid grid-cols-1 gap-6 p-4 overflow-scroll h-screen">
           <Head>
               <title>Add Darkmode and Lightmode in your course</title>
           </Head>
           <h1 className="text-2xl"><strong>Add Darkmode and Lightmode in your course [Articulate Storyline 360]</strong></h1>
<p><em>The applications as Facebook, Youtube, ...etc when you update any one of them you will find a dark mode feature because the large application try to make the user experiences more easily so they add this feature because of the huge demand for it from users.&nbsp;</em></p>
<p><iframe width="640" height="360" src="https://www.youtube.com/embed/4oKRlHQr3Xc?&wmode=opaque&rel=0" frameBorder="0" ></iframe><br/></p>
<p>A lot of users when they use any software, they tend to use dark mode because they see it very amazing and They are especially favored in cases where the user is in front of a screen for extended periods of time.</p>
<p>So when I build an E-learning course in the storyline, I wanted to add some features as Dark mode to make the learner more comfortable when he learns this course.</p>
<p>First, let&rsquo;s talk about Articulate storyline 360</p>
<p>One of the important software to creating E-learning courses where provides a lot of features that help E-learning developers to create the course as interactions, assessments,...etc&nbsp;</p>
<p>in this tutorial we will add a dark mode feature in the course we will learn in this tutorial:-</p>
<ol className="list-decimal  ml-8">
    <li >The user interface for Storyline 360</li>
    <li>Working with layers</li>
    <li>Adding variables</li>
    <li>Working with triggers</li>
</ol>
<h2>The user interface  for Storyline 360</h2>
<img src="https://media-exp1.licdn.com/dms/image/C4D12AQF5VIQ1X5GsVg/article-inline_image-shrink_1000_1488/0/1627212808750?e=1646870400&v=beta&t=oKY0_zxt0dtv7CE2wt-cMrrGBTM2RZxTxQkPmG82kJ4" alt=""/>
<p>It’s a user interface for Storyline when you open it </p>
<ol className="list-decimal pl-8">
    <li>this part contains some instructions as:-</li>
    <ul className="list-disc  ml-8">
        <li>New project: to create a blank project</li>
        <li>Record screen: if you want to take a video recorder and import it to the storyline</li>
        <li>Record screen: if you want to take a video recorder and import it to the storyline</li>
        <li>Team slides: if you and your team will work on the same project</li>
    </ul>
    <li>This part contains the recent files if you are working on previous projects</li>
</ol>
<p>We will choose the first instruction (New project)</p>
<img src="https://media-exp1.licdn.com/dms/image/C4D12AQExagWuHd7U4w/article-inline_image-shrink_1500_2232/0/1627212857866?e=1646870400&v=beta&t=ME2XPsQ4r3GF5Myy6ASK8arsuZd41TnM15fW-oxVGIM" alt="" />
         <ul className="list-disc  ml-8">
             <li>It displays scenes and slides to see the big picture for the course</li>
             <li>Tabs and options we will recognize later</li>
         </ul>
         <p>We will double click on the slide to open slides</p>
         <img src="https://media-exp1.licdn.com/dms/image/C4D12AQEQYnah0fasZA/article-inline_image-shrink_1500_2232/0/1627212889503?e=1646870400&v=beta&t=mO1A1nsEeSylHm44Rpm0_R-K40DM6TG94oI4g7WA08k" alt="" />
         <img src="https://media-exp1.licdn.com/dms/image/C4D12AQG0mI5a-Yk60A/article-inline_image-shrink_1500_2232/0/1627212909645?e=1646870400&v=beta&t=t5ytVb9UJFV4syITx0Y6dsfVVoq71GBC6LJrMWRzwZo" alt="" />
         <ul className="list-disc  ml-8">
             <li>Click on the Design tab</li>
             <li>Click on story view to edit size for slides</li>
             <li>Remove the mark on the "lock aspect ratio"</li>
             <li>Change width to 1920px and height to 980px</li>
             <li>Click on OK</li>
         </ul>
         <img src="https://media-exp1.licdn.com/dms/image/C4D12AQF3dVmul3X3ew/article-inline_image-shrink_1500_2232/0/1627212939643?e=1646870400&v=beta&t=v12UypcuaMyZm-KMop4aIHHGw8HxqrOw085NNNnFgAY" alt="" />
         <p>before we start in the course let's determine the pallets for dark and light</p>
         <img src="https://media-exp1.licdn.com/dms/image/C4D12AQFXURcQh70AvQ/article-inline_image-shrink_1000_1488/0/1627212989578?e=1646870400&v=beta&t=93g_usFnHf3OnlcKASGt9qFzDuYB8aVVkcT2AQ6Jmrw" alt=""/>
         <p>Now everything is ready to start in our course and add Dark mode feature</p>
         <h2>Layers in Storyline</h2>
         <p>Use <a href="https://community.articulate.com/articles/articulate-storyline-360-user-guide-how-to-work-with-slide-layers">slide layers</a> to create interactions and branched scenarios in your Storyline 360 courses. Layers can display additional content on a slide at certain points on the timeline or in response to learners' actions.</p>
         <img src="https://media-exp1.licdn.com/dms/image/C4D12AQFOt9ka36bgbA/article-inline_image-shrink_1000_1488/0/1627213022561?e=1646870400&v=beta&t=9-yrxo02ZXuWUsaebQt0EL_bmdtEJgeEawNz1K56GAY" alt="" />
         <p>let's add a new layer for dark mode and double click on each layer to change the name for the layer<br />

in the base layer, add some objects like text boxes and 2 buttons</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQH3_EiF8Hak7g/article-inline_image-shrink_1500_2232/0/1627213059158?e=1646870400&v=beta&t=SUDYKQW0mYoUhm6hRRCkIoJl9z8HNIVF5m9k7V367Yc" alt="" />
        <p>in the dark mode layer, add the same object with new colors<br />

according to the colors palette.</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQHe0Iw2q3RKhA/article-inline_image-shrink_1500_2232/0/1627213087389?e=1646870400&v=beta&t=EKdTFZ-HcWGgnSB27tfE2DklFw4dqIbPePCEMnxq64s" alt="" />
        <h2>Adding variables into the project:-</h2>
        <p>
        A Variable is a value that can change, depending on conditions or on information passed to the program.
        </p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQGfe6Z27ceklw/article-inline_image-shrink_1000_1488/0/1627213116403?e=1646870400&v=beta&t=ClLt_mneu8C4niDphn6CcH2qgX3et9PRYgyGNFnMjTA" alt="" />
        <p>
        If you created variables advance you will find variables in this<br />

to create a new variable click on this button
        </p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQEbN_IUpL6V1g/article-inline_image-shrink_1500_2232/0/1627213164847?e=1646870400&v=beta&t=hfqDPdAT-LKeKUrXrMmqCrXn1-d4h91BIQwaDD94Qqc" alt="" />
        <p>Pop up will display</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQGvhiGjBwy1bw/article-inline_image-shrink_1500_2232/0/1627213181685?e=1646870400&v=beta&t=7Z3xXaJuGVsEqxW3UnOBDjkkazRnamzKBI-PypIi9Ew" alt="" />
        <ul className="list-disc  ml-8">
            <li>Name: you will choose a name for the variable as "isDarkMode"</li>
            <li>Type: You will find 3 types</li>
            <ul className="list-disc  ml-8">
                <li>Text: if you store string value on the variable</li>
                <li>Boolean: if you store true or false values</li>
                <li>Number: if you store the values of a number</li>
            </ul>
            <li>Click on ok</li>
        </ul>
        <p>let's add a new slide</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQGdtu6xGmUrGg/article-inline_image-shrink_1500_2232/0/1627213229845?e=1646870400&v=beta&t=v2dK4VjvF0SKux7JBekMqlLu8_jzUTcvAf_R8pdSDCk" alt="" />
        <p>and add a new layer again in this slide with the name dark mode</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQGvlnX716Sxpg/article-inline_image-shrink_1500_2232/0/1627213247242?e=1646870400&v=beta&t=0FJdDaNlvttnwRSXZIxBe2JllJWX9sOHCZOuBFCFFa4" alt="" />
        <p>let's go to add triggers to the toggle button but first let's think about what do you need to happen when the user clicks on the button</p>
        <ul className="list-disc  ml-8">
            <li>In light mode: show the dark mode layer</li>
            <li>in dark mode: hide the dark mode layer to show the base layer (light mode)</li>
        </ul>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQFR4HQ7UJlV1w/article-inline_image-shrink_1000_1488/0/1627213291670?e=1646870400&v=beta&t=NOsZuoHWfmYG9NOU5quuzMn_s-CGYsQ_0fDjzq51044" alt="" />
        <h2>Working with triggers:-</h2>
        <p>
        <a href="https://community.articulate.com/articles/storyline-360-working-with-triggers" target="_blank">Triggers</a> make things happen. They're the keys to creating activities in Storyline 360. And we made them super easy to use, so you can build interactions without any coding at all. Just choose an action and decide when you want it to occur. For example, you might change the state of a character when the learner clicks a button.
        </p>
        <p>
        The user interacts with the button or any object then action happened (For example when the user click the layer will hide)
        </p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQG95e7l5h7ozA/article-inline_image-shrink_1000_1488/0/1627213320187?e=1646870400&v=beta&t=mNDvp7zEqGMNEmjPl8kFYVmckhvwQ9mIWgHYsBZRz2s" alt="" />
        <p>let's know more about the trigger pop up</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQH0bQQ4ktGOLA/article-inline_image-shrink_1000_1488/0/1627213355896?e=1646870400&v=beta&t=pseVJmLVj0TaXzqVG0-DQndy9arl-fDBnAlH30VeTJY" alt="" />
        <ul className="list-disc  ml-8">
            <li>Action will have happened</li>
            <li>User interactivity with the objects in slides</li>
        </ul>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQGLI7rhKI5ktg/article-inline_image-shrink_1000_1488/0/1627213380566?e=1646870400&v=beta&t=w18mA_RLARnVGYQKspJS3hEC7LvtNbUjsCdOudFDgA0" alt="" />
        <p>So we select show dark mode layer when the user click on the toggle button in the light mode layer and hide the layer when the user clicks on the toggle button</p>
        <img src="https://media-exp1.licdn.com/dms/image/C4D12AQH6zxXqB_uHmQ/article-inline_image-shrink_1000_1488/0/1627213420849?e=1646870400&v=beta&t=RC_Kz5j4SZl9CT3igra3q0FhhIpfyKJrnTeA_zicFjM" alt="" />
        <p>We accomplished a great part in this course but we have a bug imagine with me the user moves to the next slide in light mode then click on the toggle button and return the previous slide it will return to the base layer so we need to add trigger into the timeline is started<br />
    

and here comes the benefit of the variable which we created later</p>
<img src="https://media-exp1.licdn.com/dms/image/C4D12AQEI7LH4_isoEA/article-inline_image-shrink_1000_1488/0/1627213445376?e=1646870400&v=beta&t=D6nQHrmSjKTTyKYWinlWHOl_jdWWe4-9AMzesrKEl9Q" alt="" />
<ul className="list-disc  ml-8">
    <li>We will add a trigger into each slide</li>
    <li>Show layer dark mode</li>
    <li>when the user timeline starts</li>
    <li>when the user timeline starts</li>
</ul>
<img src="https://media-exp1.licdn.com/dms/image/C4D12AQFBSz4U9O6aoA/article-inline_image-shrink_1000_1488/0/1627213472992?e=1646870400&v=beta&t=pWDdWl6gl7LoCcwieD22FFcI0t67KW1SBvjjzJ4P_j0" alt="" />
<p>
and add trigger into toggle button in light mode to set the value to true and when clicking on toggle button in the dark mode it will set the value to false.<br />

Finally, we finished this tutorial this process will take more time but it will provide a better learning experience for learners and make them interact with the course by best for them.
</p>
<p>Check it out in <a href="https://360.articulate.com/review/content/0b635b81-36d1-42b6-bb11-5f5348a7b8d0/review"target="_blank">Storyline review 360.</a></p>
         <Link href={'/articles'}>
        <p className="text-2xl font-bold cursor-pointer" > ← Back </p>
         </Link>
         </div>
    )
}

export default singleArticle
 