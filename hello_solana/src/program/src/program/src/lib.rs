use solana_program::{
    account_info::AccountInfo, 
    entrypoint, 
    entrypoint::ProgramResult, 
    msg, 
    pubkey::Pubkey,
};

//On dit au programme que la fonction process_instruction est l'entrypoint (point d'entrée) du programme
entrypoint!(process_instruction); 

//La fonction process_instruction est appelée à chaque fois que le programme est exécuté
//en gros c'est la fonction main de notre programme
fn process_instruction( 
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {
    msg!("Hello, Solana!"); //On affiche "Hello, Solana!" dans la console
    Ok(())
}