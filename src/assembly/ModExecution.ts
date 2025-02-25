import { System } from "@koinos/sdk-as";
import { modexecution } from "./proto/modexecution";
import { MODULE_EXECUTION_TYPE_ID } from "./Constants";

export class ModExecution {

  callArgs: System.getArgumentsReturn | null;

  contractId: Uint8Array = System.getContractId();

  /**
   * Executes the specified operation.
   * 
   * This method is called to perform a specific operation, which may include 
   * smart contract calls or other actions defined in the execution module.
   * @external
   */
  execute(args: modexecution.execute_args): void {
    System.log("[mod-execution] execute called");
  }

  /**
   * Handles the installation of the module.
   * 
   * This method is called when the module is installed. It can include logic
   * for setting up the module, initializing storage, or other setup tasks.
   * @external
   */
  on_install(args: modexecution.on_install_args): void {
    System.log("[mod-execution] called module install");
  }

  /**
   * Handles the uninstallation of the module.
   * 
   * This method is called when the module is uninstalled. It can include logic
   * for cleanup tasks, such as removing storage or other resources used by the module.
   * @external
   */
  on_uninstall(args: modexecution.on_uninstall_args): void {
    System.log("[mod-execution] called module uninstall");
  }

  /**
   * Checks if the module matches a specific type.
   * 
   * This method is called to verify if the module is of a certain type. It returns
   * a boolean indicating whether the module type matches the provided type ID.
   * @external
   * @readonly
   */
  is_type(args: modexecution.is_type_args): modexecution.is_type_result {
    const result = new modexecution.is_type_result();
    result.value = args.type_id == this.manifest().type_id;
    return result;
  }

  /**
   * @external
   * @readonly
   */
  manifest(): modexecution.manifest {
    const result = new modexecution.manifest();
    result.name = "Module execution";
    result.description = "Module execution main class";
    result.type_id = MODULE_EXECUTION_TYPE_ID;
    result.version = "2.0.0";
    return result;
  }
}