SendToDiscord = function(playerName, discordMessage)
    local embeds = {
        {
            ["type"] = "rich",
            ["title"] = playerName,
            ["description"] = discordMessage,
            ["color"] = 10092339,
            ["footer"] = {
                ["text"] = "NSRP Inventory Log: " .. os.date()
            }
        }
    }

    PerformHttpRequest("https://discordapp.com/api/webhooks/773792316879011860/ZH7OEWIWvyQ6b4fbyIRCOgeTzcASIF1cT3g0HZcbrI9WkUaOwmX-aSRITfcz31DDTOeT", function(err, text, headers) end, 'POST', json.encode({ embeds = embeds}), { ['Content-Type'] = 'application/json' })
end