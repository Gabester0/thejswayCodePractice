
/*
--note--
I began to write this program, about the first 20 lines, before I realized I ought to get organized and write a simple to do list to walk myself through the functionality of the program.

\\1- create a checkInput function to check inputs for correct format
\\    --This function will call the appropriate function based on input
\\2- create a function to handle incorrect inputs
\\    --This function will call inputPrompt after alerting error message with instructions on proper handling of this.
\\3- create showLinks function to alert through the the urls array.
\\    --this function will call the inputPrompt function
\\4-create addLink function
\\    --this function will prompt the user for title, url, and author.
\\        --this function will check the format of the url.
\\            --beginsWith("http://" || "https://")
\\            --endsWith(".com" || ".net" || ".io")

    --note--used contains(".", url.length-4).  While this will exclude some actual domain extensions that are longer than three letters, this seemed like a simple effective way to check for a period without typing in all the possible extensions (.com, .net, .ca, .io, .uk...)
    
\\    --this function will call the URL function and pass it the three prompts.
\\    --this function will finally push the url to urls
\\    --and then call inputPrompt
\\5-create removeLink function
\\    --this function will prompt user to input a url index number\
    --note--Used a counter variable when iterating through the array of links to imitate the index of each url's position in the urls array
\\    --this function will use slice (? or splice) to remove that url
    --note--used splice to remove.
\\    --this function will then call inputPrompt
\\6-create a quit function which will call a prompt (use window.close()   )

\\-7- added if statements to improve function of removeLink function
      --added if statement and alert to handle removeLinks being selected without any links added.
      --Added addition inside if statement to handle incorrect inputs.
*/