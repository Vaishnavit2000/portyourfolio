import React from 'react'
import Theme1 from '../templates/theme1';
import Theme2 from '../templates/theme2';
import Theme3 from '../templates/theme3';
import Theme4 from '../templates/theme4';
import Theme5 from '../templates/theme5';
export default function theme_selector(props) {

    const data=props.data;

    const id=props.match.params.id;
    var name1='';
    var email='';
    var website= '';
    var bio= '';
    var phone= '';
    var photo= '';
    var job_title= '';
    var location= '';
    var git_link= '';
    var linkedin_link= '';
    var twitter_link= '';
    var work_exp= '';
    var hobbies= '';
    var skills= '';
    var projects= '';
    var resume_link= '';
  var theme= '';
    for(var key in data)
  {
    if(id === data[key]["website"])
    {
      name1=data[key]["name"];
      email=data[key]["email"];
      website=data[key]["website"];
      bio=data[key]["bio"];
      phone=data[key]["phone"];
      photo=data[key]["photo"];
      job_title=data[key]["job_title"];
      location=data[key]["location"];
      git_link=data[key]["git_link"];
      linkedin_link=data[key]["linkedin_link"];
      twitter_link=data[key]["twitter_link"];
      work_exp=data[key]["work_exp"];
      hobbies=data[key]["hobbies"];
      skills=data[key]["skills"];
      projects=data[key]["projects"];
      resume_link=data[key]["resume_link"];
      theme=data[key]["theme"];

    }
  }
  console.log(data,id);
  console.log(name1);
  var ThemeComponent;
  if(theme==="Theme1")
    {ThemeComponent=<Theme1  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme}/>;
  }
  else if(theme==="Theme2")
  {ThemeComponent=<Theme2  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme}/>;}
  else if(theme==="Theme3")
  {ThemeComponent=<Theme3  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme}/>;
  console.log("t3");}
  else if(theme==="Theme4")
  {ThemeComponent=<Theme4  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme}/>;}
  else if(theme==="Theme5")
  {ThemeComponent=<Theme5  name={name1} email={email} website={website} bio={bio} phone={phone} photo={photo} job_title={job_title} location={location} git_link={git_link} linkedin_link={linkedin_link} twitter_link={twitter_link} work_exp={work_exp} hobbies={hobbies} skills={skills} projects={projects} resume_link={resume_link} theme={theme}/>;}
    return (
        <div>
          {ThemeComponent}
        </div>
    )
}
