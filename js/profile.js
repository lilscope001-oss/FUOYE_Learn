const { data,error } =
await supabase.auth.signInWithPassword({

email,

password

});

await supabase

.from("users")

.insert({

id:data.user.id,

full_name:name,

matric_number:matric,

level:"100L",

department:"Computer Science"

});