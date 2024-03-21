import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'

/**
 * ES:
 * Descripción: Archivo utilizado para configurar las traducciones de los textos en la página web utilizando i18next.
 * 
 * EN:
 * Description: File used to configure the translations of the texts on the web site using 18next
 */
i18next.use(LanguageDetector).init({
    debug: true,
    fallbackLng: 'es',
    resources:{
        en: {
            translation: {
              home: "Home",
              about: "About",
              projects: "Projects",
              hellomsg: "¡Hello world!",
              name: "I'm Oned Gómez",
              profession: ["Systems Engineer", "Junior Web Developer"],
              welcomemsg: "Welcome to My personal website",
              one: "My name is Oned Alejandro Gómez, 24 years old, i'm Systems Engineer graduated from the National Autonomous University of Honduras (UNAH). I'm passionate about my career and i consider it an art that not everyone can express.",
              two: "I'm a person always willing to learn new things that allow me to grow both personally and professionally.",
              techstack: [
                ["HMTL", "Advanced", "html5"],
                ["CSS", "Advanced", "css3"],
                ["VueJs", "Advanced", "vuejs"],
                ["Bootstrap", "Advanced", "bootstrap"],
                ["SQL", "Advanced", "sql"],
                ["Spring Boot", "Advanced", "springboot"],
                ["C#", "Advanced", "c#"],
                ["JavaScript", "Intermediate", "js"],
                ["C++", "Intermediate", "c++"],
                ["Java", "Intermediate", "java"],
                ["Python", "Intermediate", "python"],
                ["PHP", "Intermediate", "php"],
                ["Golang", "Intermediate", "go"]
              ],
              tools: [
                ["MySQL", "Advanced", "mysql"],
                ["SQL Server", "Advanced", "sqls"],
                ["Power BI", "Intermediate", "pw"],
                ["Tableau", "Intermediate", "tableau"],
                ["Github", "Advanced", "github"],
                ["git", "Basic", "git"],
                ["NPM", "Basic", "npm"],
                ["Cloud Computing whit AWS", "Basic", "aws"]
              ]
            }
          },
          es: {
            translation: {
              home: "Principal",
              about: "Sobre mí",
              projects: "Proyectos",
              hellomsg: "¡Hola mundo!",
              name: "Soy Oned Gómez",
              profession: ["Ingeniero de Sistemas", "Desarrollador Web Junior"],
              welcomemsg: "Bienvenido a mi sitio web personal",
              one: "Mi nombre es Oned Alejandro Gómez, tengo 24 años, soy Ingeniero de Sistemas egresado de la Universidad Nacional Autónoma de Honduras (UNAH). Me apasiona mi carrera y la considero un arte que no todos pueden expresar.",
              two: "Soy una persona siempre dispuesta a aprender cosas nuevas que me permitan crecer tanto a nivel personal como profesional.",
              techstack: [
                ["HMTL", "Avanzado", "html5"],
                ["CSS", "Avanzado", "css3"],
                ["VueJs", "Avanzado", "vuejs"],
                ["Bootstrap", "Avanzado", "bootstrap"],
                ["SQL", "Avanzado", "sql"],
                ["Spring Boot", "Avanzado", "springboot"],
                ["C#", "Avanzado", "c#"],
                ["JavaScript", "Intermedio", "js"],
                ["C++", "Intermedio", "c++"],
                ["Java", "Intermedio", "java"],
                ["Python", "Intermedio", "python"],
                ["PHP", "Intermedio", "php"],
                ["Golang", "Intermedio", "go"]
              ],
              tools: [
                ["MySQL", "Avanzado", "mysql"],
                ["SQL Server", "Avanzado", "sqls"],
                ["Power BI", "Intermedio", "pw"],
                ["Tableau", "Intermedio", "tableau"],
                ["Github", "Avanzado", "github"],
                ["git", "Basico", "git"],
                ["NPM", "Basico", "npm"],
                ["Cloud Computing whit AWS", "Basico", "aws"]
              ]
            }
          }
    }
});

export default function (app){
    app.use(I18NextVue, {i18next})
    return app
}