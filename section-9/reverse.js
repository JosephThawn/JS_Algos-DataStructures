/**Resursive
Whrite a recursive function called reverse which accepts a strings and returns new string in reverse.
reverse('awesome') // 'emosewa'
reverse('rithmschool') // 'loohcsmhtir'
 */

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome"));
/**
   reverse("awesome")
      return reverse(str.slice(1)) + str[0];
      return reverse("wesome") + "a"
  
  reverse("wesome")
      return reverse(str.slice(1)) + str[0];
      return reverse('esome') + ('w')
   
  reverse("esome")
      return reverse(str.slice(1)) + str[0];
      return reverse("some") + ("e")
  
  reverse("some")
      return reverse(str.slice(1)) + str[0];
      return reverse("ome") + ("s")
  
  reverse("ome")
      return reverse(str.slice(1)) + str[0];
      return reverse("me") + ("o")
  
  reverse("me")
    return reverse(str.slice(1)) + str[0];
    return reverse("e") + "m"
    str.length <= 1 base case stops
  
  reverse("e")
    return reverse(str.slice(1)) + str[0];
    return reverse("") + "e"
    since str.length <= 1 base case stops and the result return "e"
  
  reverse("me")
    return reverse("e") + "m
    return "e" + "m" + "em"
  
  reverse("ome")
    return reverse("me") + ("o")
    return "em" + "o" = "emo"
  
  reverse("some")
      return reverse("ome") + ("s")
      return "emo" + "s" = "emos"
  
  reverse("esome")
      return reverse("some") + ("e")
      return "emos" + "e" = "emose"
  
  reverse("wesome")
    return reverse('esome') + ('w')
    return "emose" + "w" = "emosew"
  
  reverse("awesome")
      return reverse("wesome") + "a"
      return "emosew" + "a" = "emosewa"
  
      the final result is "emosewa"
  
  
   
  
  
  
  
  
  
  
  
  
  //Will be back for this explanation using for video lesson tutrial
  
   */

//Different solution from YouTube

function reverseOne(str) {
  if (str.length === 0) return "";
  return reverseOne(str.slice(1)) + str[0];
}
console.log(reverseOne("happy"));
/**
  reverseOne('happy)
    return reverseOne(str.slice(1) + str[0]
    return reverseOne("appy") + 'h'
  
  reverseOne("appy")
    return reverseOne(str.slice(1) + str[0]
    return reverseOne("ppy") + ("a")
  
  reverseOne("ppy")
    return reverseOne(str.slice(1) + str[0]
    return reverseOne("py") + "p"
  
  reverseOne("py")
    return reverseOne(str.slice(1) + str[0]
    return reverseOne("y") + "p"
  
  reverseOne("y")
    return reverseOne(str.slice(1) + str[0])
    return reverseOne("")  + 'y'
    since str.length == 0 base case stops and the result return y
  
    reverseOne("py")
      return reverseOne("y") + "p"
      return "y" = 'p" ="yp"
  
    reverseOne("ppy")
      return reverseOne("py") + "p"
      return "yp" + "p" = "ypp"
  
    reverseOne("appy")
      return reverseOne("ppy") + ("a")
      return "ypp" + "a" = "yppa"
  
    reverseOne('happy)
      return reverseOne("appy") + 'h'
      return "yppa" + "h" = "yppah"
  
    The final answer is "appyah"
  
  
  
  
  
   
  
  
   */
