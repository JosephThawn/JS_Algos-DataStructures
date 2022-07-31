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
    return reverse("wesome") + ("a")

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
      

//Will be back for this explanation using for video lesson tutrial



 




 */
