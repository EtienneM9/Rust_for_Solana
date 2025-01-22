use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::{
    account_info::{next_accountinfo, AccountInfo}, 
    entrypoint, 
    entrypoint::ProgramResult, 
    msg, 
    progam_error::ProgramError,
    pubkey::Pubkey,
};

#[derive(BorshSerialize, BorshDeserialize, Debug)]
pub struct MathStuffSum [
    pub sum = u32,
]

//On dit au programme que la fonction process_instruction est l'entrypoint (point d'entrée) du programme
entrypoint!(process_instruction); 

//La fonction process_instruction est appelée à chaque fois que le programme est exécuté
//en gros c'est la fonction main de notre programme
fn process_instruction( 
    program_id: &Pubkey,
    accounts: &[AccountInfo],
    _instruction_data: &[u8],
) -> ProgramResult {


    //on itère sur les différents comptes
    let accounts_iter = &mut accounts.iter();

    //on récupère le compte au quel on veut dire hello
    let acc = next_accountinfo(accounts_iter)?;


    /*
        TRES IMPORTANT POUR SOLANA:
        le compte acc doit être posséder par le programme pour qu'on puisse lui dire hello
    */
    
    if acc.owner != program_id {
        msg!("Le compte n'appartient pas au programme");
        return Err(ProgramError::IncorrectProgramId);
    }

    msg!("Debug output:");
    msg!("Acc ID: { }", acc.key);
    msg!("Acc owner: { }", acc.owner);
    msg!("executable: { }", acc.executable);
    msg!("lamports: { }", acc.lamports);*
    msg!("debug output end");

    



    Ok(())
}