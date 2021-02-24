ESX.RegisteredUniqueItems = {}

ESX.RegisterUniqueUsableItem = function(itemName, callback)
    if ESX.RegisteredUniqueItems[itemName] then
        return
    end

    ESX.RegisteredUniqueItems[itemName] = callback
end

RegisterServerEvent("rdrp_inventory:useItem")
AddEventHandler("rdrp_inventory:useItem", function(itemData)
    if ESX.RegisteredUniqueItems[itemData["name"]] then
        ESX.RegisteredUniqueItems[itemData["name"]](source, itemData)
    end
end)

ESX.RegisterUniqueUsableItem("license", function(source, itemData)
    itemData["uniqueData"]["dateofbirth"] = itemData["uniqueData"]["dob"]
    itemData["uniqueData"]["sex"] = "M/F"

    TriggerClientEvent("rdrp_identification:useLicense", source, itemData["uniqueData"])
end)

ESX.RegisterUniqueUsableItem("iphone", function(source, itemData)
    TriggerClientEvent("rdrp_phone:loadPhone", source, itemData["uniqueData"])
    TriggerClientEvent("rdrp_phone:openPhone", source)
end)

ESX.RegisterUniqueUsableItem("powerbank", function(source, itemData)
    TriggerClientEvent("rdrp_chargingstations:eventHandler", source, "use_powerbank", itemData)
end)

ESX.RegisterUniqueUsableItem("paper", function(source, itemData)
    TriggerClientEvent("rdrp_notes:eventHandler", source, "use_paper", itemData)
end)

ESX.RegisterUniqueUsableItem("notepad", function(source, itemData)
    TriggerClientEvent("rdrp_notes:eventHandler", source, "use_notepad", itemData)
end)

ESX.RegisterUniqueUsableItem("notebook", function(source, itemData)
    TriggerClientEvent("rdrp_notes:eventHandler", source, "use_notebook", itemData)
end)

ESX.RegisterUniqueUsableItem("cigarettepack", function(source, itemData)
    if itemData["uniqueData"] then
        if itemData["uniqueData"]["cigarettesLeft"] then
            if itemData["uniqueData"]["cigarettesLeft"] == 0 then
                return TriggerClientEvent("esx:showNotification", source, "Cigarettpaktet är tomt.", "error", 3000)
            else
                local player = ESX.GetPlayerFromId(source)

                local item = player.getInventoryItem("cigarettepack", itemData["itemId"])

                if item then
                    if item["uniqueData"] then
                        if item["uniqueData"]["cigarettesLeft"] then
                            item["uniqueData"]["cigarettesLeft"] = item["uniqueData"]["cigarettesLeft"] - 1
                            item["uniqueData"]["description"] = "Winston Blue är en lättare variant av Winstons cigaretter. Det finns " .. item["uniqueData"]["cigarettesLeft"] .. "st cigaretter i detta paket."

                            player.editInventoryItem(itemData["itemId"], item["uniqueData"])
                        end
                    end
                end
            end
        end
    end

    TriggerClientEvent("esx:showNotification", source, "Du tog en cigg ifrån ciggpaketet.", "hospital", 6000)
    TriggerClientEvent('esx_cigarett:startSmoke', source)
end)